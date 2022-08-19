import styled from 'styled-components';
import { colors } from '../../../constants/colors';
import MPill from './MPill';

export default function MLandingFourth() {
  return (
    <Wrapper>
      <MPill isLeftSelected={false} isRightSelected={true} />
      <Text>
        <Title>
          <b>블록</b>으로 쉽게 만드는
          <br />
          나만의 템플릿
        </Title>
        <Subtitle>
          메일 구조를 반영한 블록으로 나만의 템플릿을 만들어 보세요
        </Subtitle>
      </Text>
      <Video autoPlay loop muted playsInline>
        <source src="/videos/mobile_landing_4.mp4" type="video/mp4" />
      </Video>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  padding-top: 52px;
  background: ${colors.bg.bg};

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.div`
  height: 94px;
  margin-top: 28px;
  padding: 0 6.25%;

  display: flex;
  flex-direction: column;
  align-self: flex-start;
  justify-content: space-between;
`;

const Title = styled.div`
  font-weight: 400;
  font-size: 24px;
  line-height: 140%;
  color: ${colors.default.black};

  @media screen and (max-width: 375px) {
    font-size: 22px;
  }
`;

const Subtitle = styled.div`
  font-weight: 300;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${colors.default.black};

  @media screen and (max-width: 375px) {
    font-size: 13px;
  }
`;

const Video = styled.video`
  width: 83%;
  max-width: 500px;
  margin-top: 8px;
`;
