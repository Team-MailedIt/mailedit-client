import { useState } from 'react';
import jwtDecode from 'jwt-decode';

import API from '../../utils/API';
import GoogleAuth from './GoogleAuth';
import COLORS from '../../constants/colors';
import useInputs from '../../hooks/useInputs';
import { ModalStyle } from '../commons/ModalStyle';

import exit from '../../constants/icons/exit.svg';

import {
  Modal,
  Wrapper,
  Exit,
  Input,
  SubmitBtn,
  UnderText,
  Other,
  ErrorText,
} from './AuthPresenter';

const SignInModal = ({
  isSignInModalOpen,
  setIsSignInModalOpen,
  setIsSignUpModalOpen,
}) => {
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isPassedEmail, setIsPassedEmail] = useState(false);
  const [isCorrectPsword, setIsCorrectPsword] = useState(true);
  const [{ email, password }, handleInputChange] = useInputs({
    email: '',
    password: '',
  });

  const signInUser = { email: email, password: password };

  // 가입된 메일인지 확인
  const handleNextBtnClick = () => {
    const checkEmail = async () => {
      const { data } = await API.get(`/user-check?email=${email}`);
      console.log(data);
      setIsValidEmail(data);
      data && setIsPassedEmail(data);
    };

    checkEmail();
  };

  // 로그인
  const handleSignInBtnClick = () => {
    const signIn = async () => {
      try {
        const { data } = await API.post('/login', JSON.stringify(signInUser));
        localStorage.setItem('accessToken', data.token.access);
        localStorage.setItem('refreshToken', data.token.refresh);
        localStorage.setItem('userName', data.user.username);
        localStorage.setItem('tooltip', data.tooltip);
        localStorage.setItem(
          'accessExpiredAt',
          jwtDecode(data.token.access).exp * 1000
        );
        localStorage.setItem(
          'refreshExpiredAt',
          jwtDecode(data.token.refresh).exp * 1000
        );

        window.location.href = '/home';
      } catch {
        setIsCorrectPsword(false);
      }
    };

    signIn();
  };

  return (
    <Modal
      isOpen={isSignInModalOpen}
      onRequestClose={() => setIsSignInModalOpen(false)}
      ariaHideApp={false}
      style={ModalStyle}
    >
      <Exit src={exit} onClick={() => setIsSignInModalOpen(false)} />
      <Wrapper>
        <GoogleAuth />

        <Input
          type="email"
          name="email"
          value={email}
          onChange={handleInputChange}
          placeholder="이메일 주소"
        />
        {isPassedEmail && (
          <Input
            type="password"
            name="password"
            value={password}
            onChange={handleInputChange}
            placeholder="비밀번호"
            autoComplete="off"
          />
        )}

        {!isValidEmail && !isPassedEmail && (
          <ErrorText>등록된 이메일이 없습니다</ErrorText>
        )}
        {!isCorrectPsword && <ErrorText>비밀번호가 틀렸습니다</ErrorText>}

        {!isPassedEmail && (
          <SubmitBtn color={COLORS.gray8} onClick={handleNextBtnClick}>
            계속
          </SubmitBtn>
        )}
        {isPassedEmail && (
          <SubmitBtn color={COLORS.primary} onClick={handleSignInBtnClick}>
            로그인
          </SubmitBtn>
        )}

        <UnderText>계정이 없으세요?</UnderText>
        <Other
          onClick={() => {
            setIsSignInModalOpen(false);
            setIsSignUpModalOpen(true);
          }}
        >
          계정 만들기
        </Other>
      </Wrapper>
    </Modal>
  );
};

export default SignInModal;
