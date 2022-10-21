import { useState } from 'react';
import { useContext } from 'react';
import styled from 'styled-components';
import { colors } from '../../../constants/colors';
import { AuthContext } from '../../../contexts/AuthContext';
import SignInModal from '../../auth/SignInModal';
import SignUpModal from '../../auth/SignUpModal';

export default function Header() {
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
  };

  return (
    <Wrapper>
      <Top>
        <Logo src="/images/landing_header_logo.png" alt="landing header logo" />
        <Option>
          {isLogin ? (
            <>
              <div />
              <Span onClick={handleSignOutBtnClick}>로그아웃</Span>
            </>
          ) : (
            <>
              <Span onClick={handleSignInBtnClick}>로그인</Span>
              <Border />
              <Span onClick={handleSignUpBtnClick}>회원가입</Span>
            </>
          )}
        </Option>
      </Top>
      <Video autoPlay loop muted playsInline>
        <source src="/videos/mobile_landing_header.mp4" type="video/mp4" />
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
}

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
`;

const Video = styled.video`
  width: 100%;
  display: block;
`;

const Top = styled.div`
  width: 90%;
  margin-top: 20px;

  position: absolute;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 132px;
  height: 26px;
`;

const Span = styled.span`
  font-weight: 400;
  font-size: 12px;
  color: ${colors.main.indigo1};
`;

const Option = styled.div`
  /* width: 29%; */
  width: 106px;
  display: flex;
  justify-content: space-between;
`;

const Border = styled.div`
  width: 1px;
  height: 12px;
  background: ${colors.default.white};
`;
