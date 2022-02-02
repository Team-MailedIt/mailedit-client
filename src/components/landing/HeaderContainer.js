import styled from "styled-components";
import { MainLogo } from "../../constants/icons";
import { SignUp, SpanLink, VerticalLine } from "./Components";
import { useContext, useState } from "react";
import SignInModal from "../auth/SignInModal";
import SignUpModal from "../auth/SignUpModal";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const HeaderContainer = () => {
  const navigate = useNavigate();
  const userName = localStorage.getItem("userName");
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const { setIsLogin } = useContext(AuthContext);

  const handleSignInBtnClick = () => {
    setIsSignInModalOpen(!isSignInModalOpen);
  };

  const handleSignUpBtnClick = () => {
    setIsSignUpModalOpen(!isSignUpModalOpen);
  };

  const goToHome = () => {
    navigate("/home");
  };
  const goToLanding = () => {
    window.location.reload();
  };

  const handleLogout = () => {
    setIsLogin(false);
    localStorage.clear();
    navigate("/");
  };

  return (
    <Container>
      <Header src="./img/main_gif.gif">
        <Wrapper>
          <MainLogo onClick={goToLanding} src="./img/mainlogo.png" />
          {userName ? (
            <RightContainer style={{ justifyContent: "flex-end" }}>
              <SpanLink onClick={handleLogout}>로그아웃</SpanLink>
            </RightContainer>
          ) : (
            <RightContainer>
              <SpanLink onClick={goToHome} style={{ marginRight: "32px" }}>
                둘러보기
              </SpanLink>
              <VerticalLine style={{ marginRight: "32px" }} />
              <SpanLink
                style={{ marginRight: "32px" }}
                onClick={handleSignInBtnClick}
              >
                로그인
              </SpanLink>
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
      {/* <MainGif src="./img/mainGif.gif" /> */}
    </Container>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-right: 48px;
  margin-left: 48px;
  margin-top: 36px;
  @media screen and (max-width: 1440px) {
    margin-top: 28px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: auto;
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;

  height: 588px;
  @media screen and (max-width: 1440px) {
    height: 444px;
  }

  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-position: center;
`;
const RightContainer = styled.div`
  display: flex;
  align-items: center;
`;

export default HeaderContainer;
