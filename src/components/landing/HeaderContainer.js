import styled from 'styled-components';
import { MainLogo } from '../../constants/icons';
import { SignUp, SpanLink, VerticalLine } from './Components';
import { useContext, useState } from 'react';
import SignInModal from '../auth/SignInModal';
import SignUpModal from '../auth/SignUpModal';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import COLORS from '../../constants/colors';

const HeaderContainer = () => {
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

  const goToHome = () => {
    navigate('/home');
  };

  const goToLanding = () => {
    window.location.reload();
  };

  const handleLogout = () => {
    setIsLogin(false);
    localStorage.clear();
    navigate('/');
  };

  return (
    <Container>
      <Header>
        <Video autoPlay loop muted playsInline>
          <source
            src={`${process.env.PUBLIC_URL}/img/landingMain.mp4`}
            type="video/mp4"
          />
        </Video>
        <Wrapper>
          <MainLogo onClick={goToLanding} src="./img/mainlogo.png" />
          {isLogin ? (
            <RightContainer style={{ justifyContent: 'flex-end' }}>
              <SpanLink onClick={handleLogout}>로그아웃</SpanLink>
            </RightContainer>
          ) : (
            <RightContainer>
              <SpanLink onClick={goToHome}>둘러보기</SpanLink>
              <VerticalLine />
              <SpanLink onClick={handleSignInBtnClick}>로그인</SpanLink>
              <SignUp onClick={handleSignUpBtnClick}>지금 시작하기</SignUp>
            </RightContainer>
          )}
        </Wrapper>
      </Header>
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
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Header = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  /* height: 588px; */
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-position: center;
`;

const Video = styled.video`
  @media screen and (max-width: 768px) {
    margin-top: 12%;
  }
`;

const Wrapper = styled.div`
  position: absolute;
  width: 94vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-right: 48px;
  margin-left: 48px;
  margin-top: 36px;
  @media screen and (max-width: 1440px) {
    /* margin-top: 28px; */
  }
  @media screen and (max-width: 768px) {
    /* margin-top: 28px; */
    background: ${COLORS.primary};
    /* position: relative; */
    position: fixed;
    top: 0;
    width: 92%;
    margin: 0;
    padding: 4%;
    /* visibility: hidden; */
  }
`;

const RightContainer = styled.div`
  display: flex;
  align-items: center;
  width: 304px;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    width: 54vw;
  }
`;

export default HeaderContainer;
