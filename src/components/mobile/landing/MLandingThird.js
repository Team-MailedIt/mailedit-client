import styled from 'styled-components';
import { colors } from '../../../constants/colors';
import MPill from './MPill';

export default function MLandingThird() {
  return (
    <Wrapper>
      <MPill isLeftSelected={true} isRightSelected={false} />
      <Text>
        <Title>
          자체 제작 <b>기본템플릿</b>
        </Title>
        <Subtitle>
          가장 자주 쓰는 실무 이메일을 위한 가이드,
          <br />
          기본템플릿을 사용해 보세요
        </Subtitle>
      </Text>
      <Video autoPlay loop muted playsInline>
        <source src="/videos/mobile_landing_3.mp4" type="video/mp4" />
      </Video>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  margin-top: 39px;
  padding-top: 36px;
  background: ${colors.bg.bg};

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.div`
  height: 82px;
  margin-top: 28px;
  padding: 0 6.25%;

  display: flex;
  flex-direction: column;
  align-self: flex-start;
  justify-content: space-between;
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 24px;
  color: ${colors.default.black};
`;

const Subtitle = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: ${colors.default.black};
`;

const Video = styled.video`
  width: 100%;
  margin-top: 20px;
`;
