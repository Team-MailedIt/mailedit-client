import styled from "styled-components";
import {
  BodyContainer,
  TitleSpan,
  TitleSpanBold,
  LeftPill,
  LeftPillSpan,
  RightPill,
  RightPillSpan,
  BodySpan,
  CreateTemplateButton,
  PillContainer,
} from "./Components";
import { useNavigate } from "react-router";
import COLORS from "../../constants/colors";

const BodyForth = () => {
  const navigate = useNavigate();

  const goToWorkSpace = () => {
    navigate("/workspace");
  };
  return (
    <BodyContainer>
      <PillContainer style={{ marginTop: "96px" }}>
        <LeftPill>
          <LeftPillSpan style={{ color: `${COLORS.bodyBlue}` }}>
            기본템플릿
          </LeftPillSpan>
        </LeftPill>
        <RightPill
          style={{
            color: `${COLORS.UIWhite}`,
            background: `${COLORS.bodyBlue}`,
          }}
        >
          <RightPillSpan>마이템플릿</RightPillSpan>
        </RightPill>
      </PillContainer>
      <Wrapper>
        <SecondGif src="./img/secondGif.gif" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            <TitleSpanBold>블록</TitleSpanBold>
            <TitleSpan>으로 쉽게 만드는</TitleSpan>
          </div>
          <TitleSpan>나만의 템플릿</TitleSpan>

          <BodySpan style={{ marginTop: "24px" }}>
            메일의 구조를 반영한 블록을 활용해
          </BodySpan>
          <BodySpan>보다 쉽게 나만의 템플릿을 만들어 보세요</BodySpan>
          <CreateTemplateButton
            onClick={goToWorkSpace}
            style={{ marginTop: "40px" }}
          >
            템플릿 만들러 가기
          </CreateTemplateButton>
        </div>
      </Wrapper>
    </BodyContainer>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 86px;
  justify-content: space-between;
  margin-left: 160px;
  margin-right: 160px;
`;
const SecondGif = styled.img`
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-position: center;
  width: 687px;
  height: auto;
  margin-right: 265px;
  @media screen and (max-width: 1440px) {
    width: 556px;
    height: auto;
  }
`;

export default BodyForth;
