import { useState } from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components';

import API from '../../utils/API';
import GoogleAuth from './GoogleAuth';
import COLORS from '../../constants/colors';
import useInputs from '../../hooks/useInputs';

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

const SignUpModal = ({
  isSignUpModalOpen,
  setIsSignInModalOpen,
  setIsSignUpModalOpen,
}) => {
  const [isPassedEmail, setIsPassedEmail] = useState(false);
  const [isCorrectPsword, setIsCorrectPsword] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidUser, setIsValidUser] = useState(false);
  const [isAllPassedUser, setIsAllPassedUser] = useState(false);

  const [{ name, email, password, confirmPassword }, handleInputChange, reset] =
    useInputs({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    });

  const signUpUser = { username: name, email: email, password: password };

  // 이메일 중복 확인
  const handleConfirmEmail = () => {
    API.get(`/user-check?email=${email}`).then((res) => {
      setIsValidEmail(!res.data);

      !res.data && setIsPassedEmail(true);
    });
  };

  // 비밀번호와 비밀번호 확인
  const handleConfirmPassword = () => {
    if (password === confirmPassword) {
      setIsCorrectPsword(true);
      setIsValidUser(true);
    } else {
      setIsCorrectPsword(false);
    }
  };

  // 회원가입
  const handleSignUpBtnClick = () => {
    API.post('/signup', JSON.stringify(signUpUser))
      .then(() => {
        setIsAllPassedUser(true);
      })
      .catch(() => {
        setIsValidEmail(false);
        setIsCorrectPsword(true);
      });
  };

  const modalStyle = {
    overlay: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0,0,0,0.65)',
      zIndex: 10,
    },
  };

  return (
    <>
      {!isValidUser && (
        <Modal
          isOpen={isSignUpModalOpen}
          onRequestClose={() => setIsSignUpModalOpen(false)}
          ariaHideApp={false}
          style={modalStyle}
        >
          <Exit src={exit} onClick={() => setIsSignUpModalOpen(false)} />
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
              <>
                <Input
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleInputChange}
                  placeholder="비밀번호"
                  autoComplete="off"
                />
                <Input
                  type="password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={handleInputChange}
                  placeholder="비밀번호 확인"
                  autoComplete="off"
                />
              </>
            )}
            {!isValidEmail && (
              <ErrorText>이 이메일 주소는 이미 사용 중입니다</ErrorText>
            )}
            {!isCorrectPsword && <ErrorText>비밀번호가 틀렸습니다</ErrorText>}
            {!isPassedEmail && (
              <SubmitBtn color={COLORS.gray8} onClick={handleConfirmEmail}>
                계속
              </SubmitBtn>
            )}
            {isPassedEmail && (
              <SubmitBtn color={COLORS.primary} onClick={handleConfirmPassword}>
                회원가입
              </SubmitBtn>
            )}

            <UnderText>계정이 이미 있으신가요?</UnderText>
            <Other
              onClick={() => {
                setIsSignUpModalOpen(false);
                setIsSignInModalOpen(true);
              }}
            >
              로그인하기
            </Other>
          </Wrapper>
        </Modal>
      )}
      {isValidUser && !isAllPassedUser && (
        <ValidUserModal
          isOpen={isSignUpModalOpen}
          onRequestClose={() => setIsSignUpModalOpen(false)}
          ariaHideApp={false}
          style={modalStyle}
        >
          <WelcomText>
            환영합니다!
            <br />
            서비스에서 쓰일 이름을 입력해 주세요
          </WelcomText>
          <NameInput
            type="name"
            name="name"
            value={name}
            onChange={handleInputChange}
            placeholder="이름"
          />
          <SubmitFormBtn onClick={handleSignUpBtnClick}>확인</SubmitFormBtn>
        </ValidUserModal>
      )}
      {isAllPassedUser && (
        <VerifyEmailModal
          isOpen={isSignUpModalOpen}
          onRequestClose={() => setIsSignUpModalOpen(false)}
          ariaHideApp={false}
          style={modalStyle}
        >
          <WelcomText>
            인증 메일이 발송되었습니다.
            <br />
            인증해 주세요.
          </WelcomText>
          <SubmitFormBtn onClick={() => setIsSignUpModalOpen(false)}>
            확인
          </SubmitFormBtn>
        </VerifyEmailModal>
      )}
    </>
  );
};

const ValidUserModal = styled(ReactModal)`
  width: 540px;
  height: 322px;

  background: ${COLORS.gray1};
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  align-items: center;
  &:focus {
    outline: none;
  }
`;

const WelcomText = styled.div`
  width: 293px;
  height: 56px;

  font-size: 20px;
  line-height: 140%;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  letter-spacing: -0.01em;

  margin-top: 48px;

  color: ${COLORS.UIBlack};
`;

const NameInput = styled.input`
  width: 344px;
  height: 44px;

  border: 1.5px solid ${COLORS.gray4};
  border-radius: 4px;

  margin-top: 36px;
  padding-left: 16px;

  background: none;
`;

const SubmitFormBtn = styled.button`
  width: 148px;
  height: 43px;

  border: none;
  color: ${COLORS.UIWhite};

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-top: 53px;
  margin-bottom: 42px;

  background: ${COLORS.primary};
  border-radius: 4px;
`;

const VerifyEmailModal = styled(ReactModal)`
  width: 400px;
  height: 240px;

  border-radius: 4px;
  background: ${COLORS.gray1};

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default SignUpModal;
