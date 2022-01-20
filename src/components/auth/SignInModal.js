import { useState } from "react";
import { useNavigate } from "react-router";

import API from "../../utils/API";
import GoogleAuth from "./GoogleAuth";
import COLORS from "../../constants/colors";
import useInputs from "../../hooks/useInputs";
import exit from "../../constants/icons/exit.svg";

import {
  Modal,
  Wrapper,
  Exit,
  Input,
  SubmitBtn,
  UnderText,
  Other,
  ErrorText,
} from "./AuthPresenter";

const SignInModal = ({
  isSignInModalOpen,
  setIsSignInModalOpen,
  setIsSignUpModalOpen,
}) => {
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isPassedEmail, setIsPassedEmail] = useState(false);
  const [isCorrectPsword, setIsCorrectPsword] = useState(true);

  const navigate = useNavigate();
  const [{ email, password }, handleInputChange, reset] = useInputs({
    email: "",
    password: "",
  });

  const signInUser = { email: email, password: password };

  const handleNextBtnClick = () => {
    API.get(`/user-check?email=${email}`)
      .then(() => {
        setIsPassedEmail(true);
      })
      .catch(() => setIsValidEmail(false));
  };

  // 로그인
  const handleSignInBtnClick = () => {
    API.post("/login", JSON.stringify(signInUser))
      .then((res) => {
        localStorage.setItem("accessToken", res.data.token.access);
        localStorage.setItem("refreshToken", res.data.token.refresh);
        localStorage.setItem("userName", res.data.user.username);

        console.log("Bearer ", res.data.token.access);

        navigate("/home");
      })
      .catch(() => setIsCorrectPsword(false));
  };

  const modalStyle = {
    overlay: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(0,0,0,0.65)",
      zIndex: 10,
    },
  };

  return (
    <Modal
      isOpen={isSignInModalOpen}
      onRequestClose={() => setIsSignInModalOpen(false)}
      ariaHideApp={false}
      style={modalStyle}
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
