import styled from 'styled-components';
import { RowContainer } from '../bubble/Components';
import { Title, Body } from './Components';
const ForthSlide = () => {
  return (
    <Slide>
      <div style={{ width: '272px' }} />
      <Title style={{ marginTop: '20px' }}>블록 사용하기</Title>
      <RowContainer style={{ alignItems: 'center', paddingTop: '8px' }}>
        <Body>
          '복사하기'를 눌러 내용을 메일에 붙여넣거나,
          <br />
          ‘템플릿 저장하기’를 눌러 마이템플릿으로 저장해 쓰세요.
        </Body>
      </RowContainer>
    </Slide>
  );
};

const Slide = styled.div`
  margin-left: 1px;
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

export default ForthSlide;
