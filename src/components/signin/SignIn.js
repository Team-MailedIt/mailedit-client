import styled from "styled-components";
import GoogleLogin from "react-google-login";
import { useNavigate } from "react-router";
import axios from "axios";

import API from "../../utils/API";
import useInputs from "../../hooks/useInputs";
import COLORS from "../../constants/colors";

const SignIn = () => {
  const navigate = useNavigate();
  const [{ name, email, password, confirmPassword }, handleInputChange, reset] =
    useInputs({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

  const signInUser = { email: email, password: password };
  const signUpUser = { username: name, email: email, password: password };

  // 회원가입
  const handleSignUpBtnClick = () => {
    if (password === confirmPassword) {
      API.post("/signup", JSON.stringify(signUpUser)).then((res) => {
        alert(res.data.message);
      });
    } else {
      alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
    }
  };

  // 로그인
  const handleSignInBtnClick = () => {
    API.post("/login", JSON.stringify(signInUser)).then((res) => {
      localStorage.setItem("accessToken", res.data.token.access);
      localStorage.setItem("refreshToken", res.data.token.refresh);
      localStorage.setItem("userName", res.data.user.username);

      API.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${res.data.token.access}`;

      console.log("accessToken: ", res.data.token.access);

      navigate("/home");
    });
  };

  // 로그인한 사용자만 요청 가능한 api 테스트
  const handleTestBtnClick = () => {
    API.get("/test").then((res) => {
      alert(res.data);
    });
  };

  // 로그아웃
  const handleSignOutBtnClick = () => {
    localStorage.clear();
    console.log("로그아웃됨");
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

  return (
    <>
      <GoogleSignIn
        clientId={process.env.REACT_APP_GOOGLE_API_KEY}
        buttonText="구글로 계속하기"
        onSuccess={onGoogleSignInSuccess}
        onFailure={onGoogleSignInFailure}
      />
      <Input
        type="name"
        name="name"
        value={name}
        onChange={handleInputChange}
        placeholder="이름"
        autoComplete="off"
      />
      <Input
        type="email"
        name="email"
        value={email}
        onChange={handleInputChange}
        placeholder="이메일"
        autoComplete="off"
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
      <SubmitBtn onClick={handleSignUpBtnClick}>회원가입</SubmitBtn>
      <SubmitBtn onClick={handleSignInBtnClick}>로그인</SubmitBtn>
      <SubmitBtn onClick={handleSignOutBtnClick}>로그아웃</SubmitBtn>
      <SubmitBtn onClick={handleTestBtnClick}>Test</SubmitBtn>
    </>
  );
};

const GoogleSignIn = styled(GoogleLogin)`
  width: 360px;
  height: 60px;
`;

const Input = styled.input`
  width: 344px;
  height: 44px;

  border: 1.5px solid ${COLORS.gray4};
  border-radius: 4px;

  margin-top: 12px;
  padding-left: 16px;
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

  background: ${COLORS.primary};
  border-radius: 4px;
`;

export default SignIn;
