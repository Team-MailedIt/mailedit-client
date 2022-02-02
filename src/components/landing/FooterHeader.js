import styled from "styled-components";
import COLORS from "../../constants/colors";
import { useNavigate } from "react-router";

const FooterHeader = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/home");
  };
  return (
    <>
      <FooterImgBackgroundDiv src="./img/footerImg.png">
        <Wrapper>
          <RowContainer>
            <FooterTitle>메일 작성이 어려울 때는?</FooterTitle>
            <FooterLogoTitle src="./img/footertitlelogo.png" />
          </RowContainer>
        </Wrapper>
        <Wrapper2>
          <FooterBody1>실무 이메일 작성이 나에게 매번 어려웠다면?</FooterBody1>
          <RowContainer style={{ alignItems: "center" }}>
            <FooterBody2 style={{ marginRight: "16px" }}>지금 바로</FooterBody2>
            <FooterLogoBody src="./img/footerbodylogo.png" />
            <FooterBody2 style={{ marginLeft: "4px" }}>
              을 이용해 보세요
            </FooterBody2>
          </RowContainer>
        </Wrapper2>
        <Wrapper3>
          <FooterButton onClick={goToHome}>지금 시작하기</FooterButton>
        </Wrapper3>
      </FooterImgBackgroundDiv>
    </>
  );
};
const Wrapper3 = styled.div`
  margin-top: 86px;
  @media screen and (max-width: 1440px) {
    margin-top: 56px;
  }
`;

const Wrapper2 = styled.div`
  margin-top: 36px;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 1440px) {
    margin-top: 28px;
  }
`;

const Wrapper = styled.div`
  margin-top: 132px;
  @media screen and (max-width: 1440px) {
    margin-top: 100px;
  }
`;
const FooterButton = styled.button`
  width: 362px;
  height: 75px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  border: none;
  background: ${COLORS.UIWhite};
  border-radius: 4px;

  color: ${COLORS.primary};
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 34px;

  @media screen and (max-width: 1440px) {
    width: 271px;
    height: 56px;
    font-size: 20px;
  }
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const FooterTitle = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 54px;
  line-height: 160%;
  color: ${COLORS.UIWhite};

  text-align: center;

  margin-right: 20px;

  @media screen and (max-width: 1440px) {
    margin-right: 16px;
    font-size: 40px;
  }
`;
const FooterBody1 = styled.span`
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 160%;
  color: ${COLORS.UIWhite};

  @media screen and (max-width: 1440px) {
    font-size: 18px;
  }
`;
const FooterBody2 = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 160%;
  color: ${COLORS.UIWhite};

  text-align: center;
  @media screen and (max-width: 1440px) {
    font-size: 18px;
  }
`;
const FooterLogoTitle = styled.img`
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-position: center;
  width: 321px;
  height: 86px;
  @media screen and (max-width: 1440px) {
    width: 240px;
    height: 64px;
  }
`;
const FooterLogoBody = styled.img`
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-position: center;
  width: 170px;
  height: auto;
  margin-top: -4px;
  @media screen and (max-width: 1440px) {
    width: 130px;
    height: auto;
  }
`;

const FooterImgBackgroundDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 680px;
  @media screen and (max-width: 1440px) {
    height: 510px;
  }
`;
export default FooterHeader;
