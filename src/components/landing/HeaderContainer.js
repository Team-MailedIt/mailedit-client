import styled from 'styled-components';
import { MainLogo } from '../../constants/icons';
import { SignUp, SpanLink, VerticalLine } from './Components';
import { useState } from 'react';
import SignIn from '../../components/signin/SignIn';
import SignInModal from '../../components/signin/SignInModal';

const HeaderContainer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSignInBtnClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <Container>
      <Header>
        <MainLogo src="./img/mainlogo.png" />
        <RightContainer>
          <SpanLink style={{ marginRight: '32px' }}>둘러보기</SpanLink>
          <VerticalLine style={{ marginRight: '32px' }} />
          <SpanLink
            style={{ marginRight: '32px' }}
            onClick={handleSignInBtnClick}
          >
            로그인
          </SpanLink>
          <SignUp>지금 시작하기</SignUp>
        </RightContainer>
      </Header>
      <SignInModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        contents={<SignIn />}
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
