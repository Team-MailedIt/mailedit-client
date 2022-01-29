import {
  TitleSpan,
  TitleSpanBold,
  BodySpan,
  BodyContainer,
} from './Components';
import styled from 'styled-components';
import COLORS from '../../constants/colors';

const BodyFifth = () => {
  return (
    <BodyContainer>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignSelf: 'start',
        }}
      >
        <Wrapper>
          <BodyImg src="./img/bodyImg.png" />
        </Wrapper>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            marginTop: '100px',
          }}
        >
          <TitleSpan>빠르게 꺼내 쓰는</TitleSpan>
          <TitleSpanBold>마이템플릿</TitleSpanBold>
          <BodySpan style={{ marginTop: '24px' }}>
            효율적인 그룹 기능과 정렬 방식으로
          </BodySpan>
          <BodySpan>저장된 템플릿을 빠르게 사용해 보세요</BodySpan>
        </div>
      </div>
    </BodyContainer>
  );
};

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100vw;
`;
const Wrapper = styled.div`
  margin-top: 80px;
  margin-right: 45px;
  @media screen and (max-width: 1440px) {
    margin-right: 70px;
  }
`;
const BodyImg = styled.img`
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-position: center;
  width: 62.5vw;
  height: auto;
  @media screen and (max-width: 1440px) {
    width: 900px;
    height: auto;
  }
`;
export default BodyFifth;
