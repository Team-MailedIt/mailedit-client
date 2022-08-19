import styled from 'styled-components';
import { colors } from '../../../constants/colors';

export default function MLandingSecond() {
  return (
    <Wrapper>
      <Title>메일 작성을 완벽하게 해내다,</Title>
      <Logo src="/images/landing_second_logo.png" alt="landing second logo" />
      <Subtitle>
        개인 이메일 작성 개선에서 나아가 올바른 메일 문화를 선두합니다.
      </Subtitle>
      <Image
        src="/images/mobile_landing_second.png"
        alt="landing second image"
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  margin-top: 64px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 30px;

  color: ${colors.main.indigo5};

  @media screen and (max-width: 375px) {
    font-size: 27px;
  }
`;

const Logo = styled.img`
  width: 176px;
  height: 37px;
  margin-top: 8px;
`;

const Subtitle = styled.div`
  margin-top: 16px;

  font-weight: 300;
  font-size: 14px;
  color: ${colors.default.black};

  @media screen and (max-width: 375px) {
    font-size: 13px;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 400px;
  margin-top: 24px;
`;
