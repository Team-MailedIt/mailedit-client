import styled from 'styled-components';
import { MainLogo } from '../../constants/icons';
import { SignUp, SpanLink, VerticalLine } from './Components';
import { useState } from 'react';
import SignInModal from '../auth/SignInModal';
import SignUpModal from '../auth/SignUpModal';
import { useNavigate } from 'react-router-dom';

const HeaderContainer = () => {
  const userName = localStorage.getItem('userName');
  const navigate = useNavigate();
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
    localStorage.clear();
    navigate('/');
  };

  return (
    <Container>
      <Header>
        <MainLogo onClick={goToLanding} src="./img/mainlogo.png" />
        {userName ? (
          <RightContainer style={{ justifyContent: 'flex-end' }}>
            <SpanLink onClick={handleLogout}>로그아웃</SpanLink>
          </RightContainer>
        ) : (
          <RightContainer>
            <SpanLink onClick={goToHome} style={{ marginRight: '32px' }}>
              둘러보기
            </SpanLink>
            <VerticalLine style={{ marginRight: '32px' }} />
            <SpanLink
              style={{ marginRight: '32px' }}
              onClick={handleSignInBtnClick}
            >
              로그인
            </SpanLink>
            <SignUp onClick={handleSignUpBtnClick}>지금 시작하기</SignUp>
          </RightContainer>
        )}
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
      <MainGif src="./img/mainGif.gif" />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 588px;
  background: linear-gradient(126.85deg, #2d53db 41.71%, #93aaff 90.44%);
`;
const Header = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;
  margin-right: 48px;
  margin-left: 48px;

  height: 116px;
`;
const RightContainer = styled.div`
  display: flex;
  width: 317px;

  align-items: center;
`;

const MainGif = styled.img`
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-position: center;
  width: 1920px;
  height: 472px;
`;

export default HeaderContainer;
