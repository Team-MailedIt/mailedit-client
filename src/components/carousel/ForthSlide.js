import styled from "styled-components";
import { RowContainer } from "../bubble/Components";
import { Title, Body, BodyBold } from "./Components";
const ForthSlide = () => {
  return (
    <Slide>
      <div style={{ width: "272px" }} />
      <Title style={{ marginTop: "4px" }}>블록 사용하기</Title>
      <RowContainer style={{ alignItems: "center", paddingTop: "8px" }}>
        <Body>
          '복사하기'를 눌러 내용을 메일에 붙여넣거나,
          <br />
          ‘템플릿 저장하기’를 눌러 마이템플릿으로 저장해 쓰세요.
        </Body>
      </RowContainer>
      <RowContainer>
        <BodyBold style={{ marginRight: "4px" }}>이때,</BodyBold>
        <Body> 블록 부분만 저장이 됩니다.</Body>
      </RowContainer>
    </Slide>
  );
};

const Slide = styled.div`
  margin-left: 1px;
  display: flex;
  flex-direction: column;
`;

export default ForthSlide;
