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
  PillContainer,
} from './Components';
import COLORS from '../../constants/colors';
import { Link } from 'react-router-dom';

const BodyThird = () => {
  return (
    <BodyContainer>
      <PillContainer>
        <LeftPill
          style={{
            color: `${COLORS.UIWhite}`,
            background: `${COLORS.bodyBlue}`,
          }}
        >
          <LeftPillSpan>기본템플릿</LeftPillSpan>
        </LeftPill>
        <RightPill>
          <RightPillSpan style={{ color: `${COLORS.bodyBlue}` }}>
            마이템플릿
          </RightPillSpan>
        </RightPill>
      </PillContainer>
      <Wrapper>
        <LeftContainer>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <TitleSpan>자체 제작</TitleSpan>
            <TitleSpanBold style={{ marginLeft: '12px' }}>
              기본템플릿
            </TitleSpanBold>
          </div>
          <BodySpan style={{ marginTop: '24px' }}>
            가장 자주 쓰는 실무 이메일을 위한 가이드,
            <br />
            기본템플릿을 사용해 보세요
          </BodySpan>
          <div style={{ marginTop: '32px' }}>
            <Link to={'/home'}>
              <SpanLink>
                자세히 알아보기{'>'}
                {'>'}
              </SpanLink>
            </Link>
          </div>
        </LeftContainer>
        <div
          style={{
            marginLeft: '15px',
          }}
        >
          <Video autoPlay loop muted playsInline>
            <source
              src={`${process.env.PUBLIC_URL}/img/landingFirst.webm`}
              type="video/webm"
            />
          </Video>
        </div>
      </Wrapper>
    </BodyContainer>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 86px;
  align-self: flex-end;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SpanLink = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 140%;
  color: ${COLORS.blockBorder};
  display: flex;
  align-items: center;

  cursor: pointer;

  @media screen and (max-width: 1440px) {
    font-size: 20px;
  }
`;

const Video = styled.video`
  margin-left: 91px;

  @media screen and (max-width: 768px) {
    width: 88vw;
    margin: 0;
  }
`;
export default BodyThird;
