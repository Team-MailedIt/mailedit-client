import styled from 'styled-components';
import { RowContainer } from '../bubble/Components';
import { Title, Body } from './Components';
const ThirdSlide = () => {
  return (
    <Slide>
      <Img src="/img/tooltip_third.png" />
      <Title style={{ marginTop: '20px' }}>블록 움직이기</Title>
      <RowContainer style={{ alignItems: 'center', paddingTop: '8px' }}>
        <Body>드래그를 통해 블록 간의 위치를 바꿀 수 있습니다.</Body>
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
  width: 271px;
  height: 74px;
`;

export default ThirdSlide;
