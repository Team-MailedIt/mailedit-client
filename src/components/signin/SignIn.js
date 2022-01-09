import styled from "styled-components";
import GoogleLogin from "react-google-login";

import API from "../../utils/API";
import useInputs from "../../hooks/useInputs";

const SignIn = () => {
  const [{ name, email, password, confirmPassword }, handleInputChange, reset] =
    useInputs({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

  const signInUser = { email: email, password: password };
  const signUpUser = { name: name, email: email, password: password };

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

      // 헤더에 access token 값 붙이기
      const accessToken = res.data.token.access;
      API.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
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
    localStorage.setItem("userData", JSON.stringify(res.profileObj));

    const params = new URLSearchParams();
    params.append("idToken", res.tokenObj.id_token);

    API.post("/login/google", params, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((res) => {
        console.log("google: ", res);
        localStorage.setItem("accessToken", res.data.token.access);
        localStorage.setItem("refreshToken", res.data.token.refresh);
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
      <GoogleLogin
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
      />
      <Input
        type="email"
        name="email"
        value={email}
        onChange={handleInputChange}
        placeholder="이메일"
      />
      <Input
        type="password"
        name="password"
        value={password}
        onChange={handleInputChange}
        placeholder="비밀번호"
      />
      <Input
        type="password"
        name="confirmPassword"
        value={confirmPassword}
        onChange={handleInputChange}
        placeholder="비밀번호 확인"
      />
      <SubmitBtn onClick={handleSignUpBtnClick}>회원가입</SubmitBtn>
      <SubmitBtn onClick={handleSignInBtnClick}>로그인</SubmitBtn>
      <SubmitBtn onClick={handleSignOutBtnClick}>로그아웃</SubmitBtn>
      <SubmitBtn onClick={handleTestBtnClick}>Test</SubmitBtn>
    </>
  );
};

const Input = styled.input`
  width: 50%;
`;

const SubmitBtn = styled.button``;

export default SignIn;
