import styled from "styled-components";
import GoogleLogin from "react-google-login";
import API from "../../utils/API";
import { useState } from "react";
import jwtDecode from "jwt-decode";

const SignIn = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignInBtnClick = () => {
    API.post("/signin", JSON.stringify(user)).then((res) => {
      localStorage.setItem("accessToken", res.data.token.access);
      localStorage.setItem("refreshToken", res.data.token.refresh);
      localStorage.setItem(
        "expiredAt",
        jwtDecode(res.data.token.access).exp * 1000
      );

      const decoded = jwtDecode(res.data.token.access);
      const iat = decoded.iat;
      const exp = decoded.exp;
      const now = Date.now();

      console.log("만료 시간: ", new Date(exp * 1000));
      console.log("현재 시간: ", new Date(now));
      console.log("만료 시간 5분 전: ", new Date(exp * 1000 - 300000));
    });
  };

  const handleTestBtnClick = () => {
    const token = localStorage.getItem("accessToken");
    console.log("accessToken: ", token);

    API.get("/test", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      alert(res.data);
    });
  };

  const handleSignUpBtnClick = () => {
    if (user.password === confirmPassword) {
      API.post("/signup", JSON.stringify({ ...user, username: name })).then(
        (res) => {
          alert(res.data.message);
        }
      );
    } else {
      alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
    }
  };

  const handleSignOutBtnClick = () => {
    const accessToken = localStorage.getItem("accessToken");
    console.log("exp: ", Date(jwtDecode(accessToken).exp));
    console.log("iat: ", Date(jwtDecode(accessToken).iat));
    localStorage.clear();
    console.log("로그아웃됨");
  };

  const handleInputFormChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleInputChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const onSuccess = async (res) => {
    // console.log("onSucess: ", res);
    localStorage.setItem("userData", JSON.stringify(res.profileObj));
    localStorage.setItem("idToken", res.tokenObj.id_token);

    const params = new URLSearchParams();
    params.append("idToken", res.tokenObj.id_token);

    API.post("/google/login", params, {
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

  const onFailure = (res) => {
    console.log("onFailure: ", res);
  };

  return (
    <>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_API_KEY}
        buttonText="구글로 계속하기"
        onSuccess={onSuccess}
        onFailure={onFailure}
      />
      <Input
        name="name"
        value={name}
        onChange={handleChange}
        placeholder="이름"
        type="name"
      />
      <Input
        name="email"
        value={user.email}
        onChange={handleInputFormChange}
        placeholder="이메일"
        type="email"
      />
      <Input
        name="password"
        value={user.password}
        onChange={handleInputFormChange}
        placeholder="비밀번호"
        type="password"
      />
      <Input
        name="confirmPassword"
        value={confirmPassword}
        onChange={handleInputChange}
        placeholder="비밀번호 확인"
        type="password"
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
