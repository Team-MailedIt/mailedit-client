import styled from 'styled-components';
import {
  BodyContainer,
  LeftPill,
  RightPill,
  LeftPillSpan,
  RightPillSpan,
  TitleSpan,
  TitleSpanBold,
  BodySpan,
} from './Components';
import COLORS from '../../constants/colors';

const BodyThird = () => {
  return (
    <BodyContainer>
      <PillContainer style={{ marginTop: '72px' }}>
        <LeftPill>
          <LeftPillSpan>기본템플릿</LeftPillSpan>
        </LeftPill>
        <RightPill>
          <RightPillSpan>마이템플릿</RightPillSpan>
        </RightPill>
      </PillContainer>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          marginTop: '86px',
          paddingLeft: '260px',
        }}
      >
        <LeftContainer>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <TitleSpan>자체 제작</TitleSpan>
            <TitleSpanBold style={{ marginLeft: '12px' }}>
              기본템플릿
            </TitleSpanBold>
          </div>
          <BodySpan style={{ paddingTop: '24px' }}>
            가장 자주 쓰는 실무 이메일을 위한 가이드,
            <br />
            기본템플릿을 사용해 보세요
          </BodySpan>
          <div style={{ paddingTop: '32px' }}>
            <SpanLink>
              자세히 알아보기{'>'}
              {'>'}
            </SpanLink>
          </div>
        </LeftContainer>
        <div
          style={{
            paddingLeft: '15px',
          }}
        >
          <FirstGif src="./img/firstGif.gif" />
        </div>
      </div>
    </BodyContainer>
  );
};
const FirstGif = styled.img`
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-position: center;
  width: 1184px;
  height: 489px;
`;
const PillContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SpanLink = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 140%;
  color: ${COLORS.blockBorder};
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;
export default BodyThird;
