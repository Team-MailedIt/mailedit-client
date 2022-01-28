import styled from "styled-components";
import { useContext } from "react";
import { useNavigate } from "react-router";
import GoogleLogin from "react-google-login";

import API from "../../utils/API";
import COLORS from "../../constants/colors";
import google from "../../constants/icons/google.svg";
import logoBlue from "../../constants/icons/logoBlue.svg";
import { AuthContext } from "../../contexts/AuthContext";

const GoogleAuth = () => {
  const navigate = useNavigate();
  const { setIsLogin } = useContext(AuthContext);

  // 구글 로그인 성공 시
  const onGoogleSignInSuccess = async (res) => {
    await setIsLogin(true);
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

        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // 구글 로그인 실패 시
  const onGoogleSignInFailure = () => {
    alert("다시 시도해 주세요");
  };

  return (
    <>
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
    </>
  );
};

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

export default GoogleAuth;
