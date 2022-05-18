import { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import COLORS from '../../constants/colors';
import { AuthContext } from '../../contexts/AuthContext';
import SignInModal from '../auth/SignInModal';
import SignUpModal from '../auth/SignUpModal';

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
    <Wrapper>
      <Top>
        <Logo src={`${process.env.PUBLIC_URL}/img/landing_header_logo.png`} />
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
        <source
          src={`${process.env.PUBLIC_URL}/img/landingMain.mp4`}
          type="video/mp4"
        />
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
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Top = styled.header`
  /* width: 1360px;
  height: 12vh;
  padding: 0 3vw; */

  width: 94vw;
  height: 88px;
  padding: 0 40px;

  position: absolute;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    position: fixed;
    height: 68px;
    background: ${COLORS.primary};
  }
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
  justify-content: ${({ isLogin }) => (isLogin ? 'flex-end' : 'space-between')};

  font-size: 12px;
`;

const Text = styled.div`
  height: 14px;
  color: ${COLORS.UIWhite};
  margin-right: 23px;

  cursor: pointer;
`;

const Border = styled.div`
  width: 1px;
  height: 13px;
  margin-right: 23px;

  background: ${COLORS.bgWhite};
`;

const Button = styled.div`
  width: 90px;
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 4px;
  background: ${COLORS.bgWhite};

  font-size: 12px;
  color: ${COLORS.primary};

  cursor: pointer;
`;

const Video = styled.video`
  /* width: 1440px; */
  width: 100vw;
  display: block;

  @media screen and (max-width: 768px) {
    margin-top: 68px;
  }
`;

export default Header;
