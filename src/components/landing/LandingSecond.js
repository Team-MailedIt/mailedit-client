import styled from 'styled-components';
import COLORS from '../../constants/colors';

const LandingSecond = () => {
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>메일 작성을 완벽하게 해내다,</Title>
        <Logo src={`${process.env.PUBLIC_URL}/img/landing_logo_2.png`} />
      </TitleWrapper>
      <SubTitle>
        개인의 이메일 작성을 개선하는 것에서 나아가 올바른 메일 작성 문화를
        선두합니다.
      </SubTitle>
      <Image src={`${process.env.PUBLIC_URL}/img/landing_illust_2.png`} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 1440px;
  height: 900px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleWrapper = styled.div`
  width: 962px;
  height: 83px;
  margin-top: 104px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.div`
  width: 583px;
  height: 83px;

  color: ${COLORS.primary};
  font-weight: 600;
  font-size: 52px;
  line-height: 160%;
  letter-spacing: -0.01em;
`;

const Logo = styled.img`
  width: 363px;
  height: 74px;
`;

const SubTitle = styled.div`
  width: 643px;
  height: 28px;
  margin-top: 12px;

  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  color: ${COLORS.gray8};
`;

const Image = styled.img`
  width: 1119px;
  height: 478px;
  margin-top: 61px;
`;
export default LandingSecond;
