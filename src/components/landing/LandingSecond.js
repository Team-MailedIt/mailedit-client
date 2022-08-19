import styled from 'styled-components';
import { colors } from '../../constants/colors';

const LandingSecond = () => {
  return (
    <Wrapper>
      <Section>
        <Content>
          <TitleWrapper>
            <Title>메일 작성을 완벽하게 해내다,</Title>
            <Logo src="/img/landing_logo_2.png" alt="landing second logo" />
          </TitleWrapper>
          <Subtitle>
            개인의 이메일 작성을 개선하는 것에서 나아가 올바른 메일 작성 문화를
            선두합니다.
          </Subtitle>
          <Image src="/img/landing_illust_2.png" alt="landing second image" />
        </Content>
      </Section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  margin-top: 30px;
`;

const Section = styled.main`
  width: 100%;
  height: 100%;
  padding: 0 9%;

  display: flex;
  justify-content: center;
`;

const Content = styled.section`
  width: 1119px;
  height: 662px;
  margin-top: 104px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleWrapper = styled.div`
  width: 962px;
  height: 83px;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  width: 586px;
  height: 83px;
  text-align: center;

  font-weight: 600;
  font-size: 52px;
  line-height: 160%;

  text-align: center;
  letter-spacing: -0.01em;

  color: ${colors.main.indigo5};
`;

const Logo = styled.img`
  width: 363px;
  height: 74px;
`;

const Subtitle = styled.div`
  width: 646px;
  height: 28px;
  margin-top: 12px;

  text-align: center;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;

  color: ${colors.gray.gray8};
`;

const Image = styled.img`
  width: 1119px;

  height: 478px;
  margin-top: 61px;
`;

export default LandingSecond;
