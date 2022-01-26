import styled from 'styled-components';
import { RowContainer } from '../bubble/Components';
import { Title, Body, BodyBold } from './Components';
const SecondSlide = () => {
  return (
    <Slide>
      <Img src="/img/tooltip_second.png" />
      <Title style={{ marginTop: '20px' }}>블록 수정하기</Title>
      <RowContainer style={{ alignItems: 'center', paddingTop: '8px' }}>
        <Body style={{ marginRight: '4px' }}>줄바꿈은</Body>
        <BodyBold>Enter,</BodyBold>
      </RowContainer>
      <RowContainer style={{ alignItems: 'center', paddingTop: '4px' }}>
        <Body style={{ marginRight: '4px' }}>블록 안에서의 줄바꿈은</Body>
        <BodyBold style={{ marginRight: '4px' }}>Shift + Enter</BodyBold>
        <Body>입니다.</Body>
      </RowContainer>
      <RowContainer style={{ alignItems: 'center', paddingTop: '4px' }}>
        <Body style={{ marginRight: '4px' }}>
          블록 삭제는, 안의 내용을 포함해 모두
        </Body>
        <BodyBold style={{ marginRight: '4px' }}>Delete</BodyBold>
        <Body>해 주세요.</Body>
      </RowContainer>
    </Slide>
  );
};

const Slide = styled.div`
  display: flex;
  flex-direction: column;
`;
const Img = styled.img`
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-position: center;
  width: 272px;
  height: 74px;
`;

export default SecondSlide;
