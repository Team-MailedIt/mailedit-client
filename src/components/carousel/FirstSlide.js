import styled from 'styled-components';
import COLORS from '../../constants/colors';
import { Title, Body } from './Components';
const FirstSlide = () => {
  return (
    <Slide>
      <Img src="/img/tooltip_first.png" />
      <Title style={{ marginTop: '20px' }}>블록 만들기</Title>
      <Body style={{ marginTop: '8px' }}>
        텍스트를 드래그한 후, ‘블록 만들기’ 버튼을 눌러주세요.
      </Body>
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
  height: 57px;
`;

export default FirstSlide;
