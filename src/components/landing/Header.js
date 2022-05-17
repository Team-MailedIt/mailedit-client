import { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import COLORS from '../../constants/colors';
import { AuthContext } from '../../contexts/AuthContext';

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
    </>
  );
};

const Top = styled.header`
  width: 1360px;
  height: 88px;
  padding: 0 40px;

  position: absolute;

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
  width: 1440px;
  display: block;

  @media screen and (max-width: 768px) {
    margin-top: 12%;
  }
`;

export default Header;
