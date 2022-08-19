import jwtDecode from 'jwt-decode';
import styled from 'styled-components';
import GoogleLogin from 'react-google-login';

import API from '../../utils/API';
import COLORS, { colors } from '../../constants/colors';

import google from '../../constants/icons/google.svg';

const GoogleAuth = ({ googleText }) => {
  // 구글 로그인 성공 시
  const onGoogleSignInSuccess = (res) => {
    localStorage.setItem('userName', res.profileObj.givenName);

    const params = new URLSearchParams();
    params.append('idToken', res.tokenObj.id_token);

    const googleLogin = async () => {
      const { data } = await API.post('/login/google', params, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      localStorage.setItem('accessToken', data.token.access);
      localStorage.setItem('refreshToken', data.token.refresh);
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
    };

    googleLogin();
  };

  return (
    <>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_API_KEY}
        onSuccess={onGoogleSignInSuccess}
        render={(renderProps) => (
          <GoogleButton onClick={renderProps.onClick}>
            <GoogleWrapper>
              <GoogleLogo src={google} />
              <GoogleText>{googleText}</GoogleText>
            </GoogleWrapper>
          </GoogleButton>
        )}
      />

      {/* <BorderWrapper>
        <Border />
        <Or>또는</Or>
        <Border />
      </BorderWrapper> */}
    </>
  );
};

const GoogleButton = styled.button`
  width: 270px;
  height: 45px;

  background: none;
  display: flex;
  align-items: center;

  border-radius: 4px;
  border: 1.5px solid ${COLORS.gray4};
`;

const GoogleWrapper = styled.div`
  width: 165px;
  height: 27px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 9px 84px 9px 21px;
`;

const GoogleLogo = styled.img`
  width: 27px;
  height: 27px;
`;

const GoogleText = styled.span`
  font-weight: 400;
  font-size: 14px;

  display: flex;
  align-items: center;

  color: ${colors.gray.gray8};
`;

// const BorderWrapper = styled.div`
//   width: 361px;
//   height: 19px;

//   margin-top: 28px;
//   margin-bottom: 26px;

//   display: flex;
//   align-items: center;
//   justify-content: space-between;
// `;

// const Border = styled.div`
//   width: 150px;
//   height: 1px;

//   background: ${COLORS.gray4};
// `;

// const Or = styled.span`
//   font-size: 16px;
//   line-height: 19px;

//   color: ${COLORS.gray6};
// `;

export default GoogleAuth;
