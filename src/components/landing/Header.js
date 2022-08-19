import { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import styled, { css } from 'styled-components';
import { AuthContext } from '../../contexts/AuthContext';
import SignInModal from '../auth/SignInModal';
import SignUpModal from '../auth/SignUpModal';
import { colors } from '../../constants/colors';

const Header = () => {
  const navigate = useNavigate();
  const { isLogin, setIsLogin } = useContext(AuthContext);
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  const handleSignInBtnClick = () => {
    setIsSignInModalOpen(!isSignInModalOpen);
  };

  const handleSignUpBtnClick = () => {
    setIsSignUpModalOpen(!isSignUpModalOpen);
  };

  const handleSignOutBtnClick = () => {
    setIsLogin(false);
    localStorage.clear();

    navigate('/');
  };

  const goToHome = () => {
    navigate('/home');
  };

  return (
    <>
      <Top>
        <Logo src="/img/landing_header_logo.png" />
        {isLogin ? (
          <Option isLogin={isLogin}>
            <Text onClick={handleSignOutBtnClick}>로그아웃</Text>
          </Option>
        ) : (
          <Option isLogin={isLogin}>
            <Text onClick={goToHome}>둘러보기</Text>
            <Border />
            <Text onClick={handleSignInBtnClick}>로그인</Text>
            <Button onClick={handleSignUpBtnClick}>지금 시작하기</Button>
          </Option>
        )}
      </Top>

      <Video autoPlay loop muted playsInline>
        <source src="/img/landingMain.mp4" type="video/mp4" />
      </Video>

      <SignInModal
        isSignInModalOpen={isSignInModalOpen}
        setIsSignInModalOpen={setIsSignInModalOpen}
        setIsSignUpModalOpen={setIsSignUpModalOpen}
      />
      <SignUpModal
        isSignUpModalOpen={isSignUpModalOpen}
        setIsSignInModalOpen={setIsSignInModalOpen}
        setIsSignUpModalOpen={setIsSignUpModalOpen}
      />
    </>
  );
};

const Video = styled.video`
  width: 100%;
  display: block;
`;

const Top = styled.header`
  width: 100%;
  min-width: 1024px;
  height: 88px;
  padding: 0 40px;

  position: absolute;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 163px;
  height: 32px;
`;

const Option = styled.div`
  width: 236px;
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: ${(isLogin) => (isLogin ? 'flex-end' : 'space-between')};

  font-size: 12px;
`;

const Text = styled.span`
  height: 14px;
  margin-right: 23px;

  cursor: pointer;
  color: ${colors.default.white};

  @media screen and (max-width: 768px) {
    margin-right: 4px;
  }
`;

const Border = styled.div`
  width: 1px;
  height: 13px;
  margin-right: 23px;

  background: ${colors.default.white};

  @media screen and (max-width: 768px) {
    margin-right: 4px;
  }
`;

const Button = styled.div`
  width: 90px;
  height: 30px;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${colors.main.main};
  font-size: 12px;
  background: ${colors.default.white};

  cursor: pointer;
`;

export default Header;
