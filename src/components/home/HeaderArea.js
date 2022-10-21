import styled from 'styled-components';
import { useNavigate } from 'react-router';

import { useState, useContext, useEffect } from 'react';

import HomeTooltip from './HomeTooltip';
import SignInModal from '../auth/SignInModal';
import SignUpModal from '../auth/SignUpModal';
import { colors } from '../../constants/colors';
import { AuthContext } from '../../contexts/AuthContext';
import { ContentContext } from '../../contexts/ContentContext';

const HeaderArea = () => {
  const navigate = useNavigate();
  const userName = localStorage.getItem('userName');
  const { setContentHandler } = useContext(ContentContext);
  const { isLogin, setIsLogin } = useContext(AuthContext);
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  // sign in
  const handleSignInBtnClick = () => {
    setIsSignInModalOpen(!isSignInModalOpen);
  };

  // sign up
  const handleSignUpBtnClick = () => {
    setIsSignUpModalOpen(!isSignUpModalOpen);
  };

  // sign out
  const handleSignOutBtnClick = () => {
    setIsLogin(false);
    localStorage.clear();
    navigate('/');
  };

  // go to workspace
  const handleGoToWorkspace = () => {
    setContentHandler(null);
    navigate('/workspace');
  };

  // tooltip
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  const handleTooltip = () => {
    setIsTooltipOpen(true);
  };

  useEffect(() => {
    if (isTooltipOpen) {
      const timer = setTimeout(() => {
        setIsTooltipOpen(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isTooltipOpen]);

  return (
    <Wrapper>
      {isLogin ? (
        <LogOut onClick={handleSignOutBtnClick}>로그아웃</LogOut>
      ) : (
        <>
          <Auth>
            <AuthText onClick={handleSignInBtnClick}>로그인</AuthText>
            <AuthBorder />
            <AuthText onClick={handleSignUpBtnClick}>회원가입</AuthText>
          </Auth>
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
      )}

      <GreetingNButtonWrapper>
        <Greeting>
          {isLogin
            ? `안녕하세요 ${userName}님, 오늘도 이메일 작성의 고수가 되어 보세요!`
            : `안녕하세요, 오늘도 이메일 작성의 고수가 되어 보세요!`}
        </Greeting>
        <TooltipBtnWrapper>
          {/* <HomeTooltip isVisible={isTooltipOpen} /> */}
          <HomeTooltip isVisible={false} />
          <Button onClick={handleGoToWorkspace} onMouseEnter={handleTooltip}>
            템플릿 만들기
          </Button>
        </TooltipBtnWrapper>
      </GreetingNButtonWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 91px;
  margin-top: 4%;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;

  /* @media screen and (min-width: 1500px) {
    margin-top: 8vh;
  } */
`;

const LogOut = styled.span`
  font-weight: 300;
  font-size: 12px;
  color: ${colors.gray.gray7};
`;

const GreetingNButtonWrapper = styled.div`
  width: 100%;
  height: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Greeting = styled.span`
  font-weight: 500;
  font-size: 15px;
  color: ${colors.main.main};
`;

const Button = styled.button`
  width: 208px;
  height: 35px;

  font-weight: 400;
  font-size: 14px;

  background: ${colors.main.main};
  color: ${colors.default.white};
`;

const Auth = styled.div`
  width: 116px;
  height: 19px;

  margin-left: 413px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AuthText = styled.span`
  font-weight: 400;
  font-size: 12px;
  color: ${colors.gray.gray7};

  &:hover {
    cursor: pointer;
  }
`;

const AuthBorder = styled.div`
  width: 1px;
  height: 13px;
  background: ${colors.gray.gray5};
`;

const TooltipBtnWrapper = styled.div`
  width: 554px;
  height: 78px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export default HeaderArea;
