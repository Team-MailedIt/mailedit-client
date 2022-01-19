import styled from "styled-components";
import ReactModal from "react-modal";
import { useState } from "react";

import exit from "../../constants/icons/exit.svg";
import google from "../../constants/icons/google.svg";

import logoBlue from "../../constants/icons/logoBlue.svg";
import COLORS from "../../constants/colors";

import GoogleLogin from "react-google-login";
import { useNavigate } from "react-router";

import API from "../../utils/API";
import useInputs from "../../hooks/useInputs";

const SignUpModal = ({ isModalOpen, setIsModalOpen }) => {
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isPswordCorrect, setIsPswordCorrect] = useState(true);
  const [isValidUser, setIsValidUser] = useState(false);

  const navigate = useNavigate();
  const [{ name, email, password, confirmPassword }, handleInputChange, reset] =
    useInputs({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

  const signUpUser = { username: name, email: email, password: password };

  // 회원가입
  const handleSignUpBtnClick = () => {
    if (password === confirmPassword) {
      API.post("/signup", JSON.stringify(signUpUser))
        .then((res) => {
          alert(res.data.message);
          setIsValidUser(true);
        })
        .catch(() => {
          setIsValidEmail(false);
          setIsPswordCorrect(true);
        });
    } else {
      setIsPswordCorrect(false);
      setIsValidEmail(true);
    }
  };

  // 구글 로그인 성공 시
  const onGoogleSignInSuccess = async (res) => {
    localStorage.setItem("userName", res.profileObj.givenName);

    const params = new URLSearchParams();
    params.append("idToken", res.tokenObj.id_token);

    API.post("/login/google", params, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((res) => {
        localStorage.setItem("accessToken", res.data.token.access);
        localStorage.setItem("refreshToken", res.data.token.refresh);

        console.log("access: ", res.data.token.access);

        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // 구글 로그인 실패 시
  const onGoogleSignInFailure = (res) => {
    console.log("onFailure: ", res);
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
    <>
      {!isValidUser && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          ariaHideApp={false}
          style={modalStyle}
        >
          <Exit src={exit} onClick={() => setIsModalOpen(false)} />
          <Wrapper>
            <Logo src={logoBlue} />
            <Text>처음 써 보는 메일, MailedIt에서 쉽게 시작해 보세요</Text>
            <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_API_KEY}
              onSuccess={onGoogleSignInSuccess}
              onFailure={onGoogleSignInFailure}
              render={(renderProps) => (
                <GoogleButton onClick={renderProps.onClick}>
                  <GoogleWrapper>
                    <GoogleLogo src={google} />
                    <GoogleText>구글로 계속하기</GoogleText>
                  </GoogleWrapper>
                </GoogleButton>
              )}
            />
            <BorderWrapper>
              <Border />
              <Or>또는</Or>
              <Border />
            </BorderWrapper>
            <Input
              type="email"
              name="email"
              value={email}
              onChange={handleInputChange}
              placeholder="이메일 주소"
            />
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
            {!isValidEmail && <ErrorText>이미 가입된 이메일입니다</ErrorText>}
            {!isPswordCorrect && <ErrorText>비밀번호가 틀렸습니다</ErrorText>}
            <SubmitBtn color={COLORS.primary} onClick={handleSignUpBtnClick}>
              회원가입
            </SubmitBtn>
            <UnderText>계정이 이미 있으신가요?</UnderText>
            <Other>로그인하기</Other>
          </Wrapper>
        </Modal>
      )}
      {isValidUser && (
        <ValidUserModal
          isOpen={isModalOpen}
          ariaHideApp={false}
          style={modalStyle}
        ></ValidUserModal>
      )}
    </>
  );
};

const Modal = styled(ReactModal)`
  width: 540px;
  padding-bottom: 52px;

  background: ${COLORS.gray1};
  border-radius: 4px;
`;

const Wrapper = styled.div`
  width: 360px;

  margin: 32px 90px 0px 90px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Exit = styled.img`
  width: 32px;
  height: 32px;

  margin-top: 36px;
  margin-left: 472px;

  &:hover {
    cursor: pointer;
  }
`;

const Logo = styled.img`
  width: 248px;
  height: 52px;
`;

const Text = styled.span`
  height: 22px;

  font-size: 18px;
  line-height: 22px;

  margin-top: 20px;
  margin-bottom: 84px;

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.01em;
`;

const Input = styled.input`
  width: 344px;
  height: 44px;

  border: 1.5px solid ${COLORS.gray4};
  border-radius: 4px;

  margin-top: 12px;
  padding-left: 16px;

  background: none;
`;

const SubmitBtn = styled.button`
  width: 360px;
  height: 43px;

  border: none;
  color: ${COLORS.UIWhite};

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-top: 12px;

  background: ${(props) => props.color};
  border-radius: 4px;
`;

const BorderWrapper = styled.div`
  width: 361px;
  height: 19px;

  margin-top: 28px;
  margin-bottom: 26px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Border = styled.div`
  width: 150px;
  height: 1px;

  background: ${COLORS.gray4};
`;

const Or = styled.span`
  font-size: 16px;
  line-height: 19px;

  color: ${COLORS.gray6};
`;

const UnderText = styled.span`
  height: 19px;
  font-size: 16px;
  line-height: 19px;

  margin-top: 64px;

  color: ${COLORS.UIBlack};
`;

const Other = styled.div`
  width: 83px;
  height: 22px;

  margin-top: 12px;

  font-size: 18px;
  line-height: 22px;

  color: ${COLORS.indigo4};
`;

const ErrorText = styled.div`
  width: 100%;
  height: 14px;

  margin-top: 8px;

  font-size: 12px;
  line-height: 14px;

  display: flex;

  color: ${COLORS.tagRed};
`;

const GoogleButton = styled.button`
  width: 360px;
  height: 60px;

  background: none;
  display: flex;
  align-items: center;

  border-radius: 4px;
  border: 1.5px solid ${COLORS.gray4};
`;

const GoogleWrapper = styled.div`
  width: 228px;
  height: 36px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 12px 104px 12px 28px;
`;

const GoogleLogo = styled.img`
  width: 36px;
  height: 36px;
`;

const GoogleText = styled.span`
  font-size: 18px;

  display: flex;
  align-items: center;

  color: ${COLORS.gray8};
`;

const ValidUserModal = styled(ReactModal)`
  width: 540px;
  height: 322px;

  background: ${COLORS.gray1};
  border-radius: 4px;
`;

const WelcomText = styled.div`
  width: 293px;
  height: 56px;

  font-size: 20px;
  line-height: 140%;

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.01em;

  color: ${COLORS.UIBlack};
`;

export default SignUpModal;
