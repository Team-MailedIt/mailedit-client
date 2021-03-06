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

      <Responsive>
        <TitleWrapper2>
          <Title2>메일 작성을 완벽하게 해내다,</Title2>
          <Logo2 src={`${process.env.PUBLIC_URL}/img/landing_logo_2.png`} />
        </TitleWrapper2>
        <Image2 src={`${process.env.PUBLIC_URL}/img/landing_illust_2.png`} />
        <SubTitle2>MailedIt은 올바른 메일 작성 문화를 선두합니다</SubTitle2>
      </Responsive>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* width: 1440px; */
  width: 100vw;
  height: 900px;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px) {
    /* margin: 8%; */
    height: 432px;

    margin-top: 10%;
  }
`;

const TitleWrapper = styled.div`
  width: 962px;
  height: 83px;
  margin-top: 104px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    display: none;
  }
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

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Image = styled.img`
  /* width: 1119px; */
  /* height: 478px; */

  width: 78vw;
  margin-top: 61px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

/* ---------- */
/* Responsive */
/* ---------- */

const Responsive = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
`;

const TitleWrapper2 = styled.div`
  /* width: 962px; */
  height: 56px;
  /* width: 240x; */
  margin-top: 64px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const Title2 = styled.div`
  color: ${COLORS.primary};
  font-weight: 600;
  font-size: 20px;
  line-height: 160%;
  letter-spacing: -0.01em;
`;

const Logo2 = styled.img`
  /* width: 363px;
  height: 74px; */

  width: 108px;
  height: 22px;
`;

const SubTitle2 = styled.div`
  /* width: 643px; */
  /* height: 28px; */
  margin-top: 16px;

  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: ${COLORS.gray8};

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const Image2 = styled.img`
  /* width: 1119px; */
  /* height: 478px; */

  width: 78vw;
  margin-top: 61px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export default LandingSecond;
