import styled from 'styled-components';
import COLORS from '../../constants/colors';

const LandingSixth = () => {
  return (
    <Wrapper>
      <Content>
        <TitleWrapper>
          <Title>메일 작성이 어려울 때는?</Title>
          <Logo
            src={`${process.env.PUBLIC_URL}/img/landing_footer_logo1.png`}
          />
        </TitleWrapper>
        <Subtitle>실무 이메일 작성이 나에게 매번 어려웠다면?</Subtitle>
        <SubtitleWrapper>
          <Bold>지금 바로 </Bold>
          <SubtitleLogo
            src={`${process.env.PUBLIC_URL}/img/landing_footer_logo2.png`}
          />
          <Bold>을 이용해 보세요</Bold>
        </SubtitleWrapper>
        <Button>지금 시작하기</Button>
      </Content>
      <Image src={`${process.env.PUBLIC_URL}/img/landing_footer.png`} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 1440px;
  height: 510px;

  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  width: 656px;
  height: 271px;
  margin-top: 100px;

  position: absolute;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleWrapper = styled.div`
  width: 656px;
  height: 64px;

  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  width: 534px;
  height: 86px;

  color: ${COLORS.UIWhite};
  font-weight: 600;
  font-size: 40px;
  line-height: 160%;
`;

const Logo = styled.img`
  width: 240px;
  height: 64px;
`;

const Subtitle = styled.div`
  width: 312px;
  height: 29px;
  margin-top: 28px;

  color: ${COLORS.UIWhite};
  font-weight: 300;
  font-size: 18px;
  line-height: 160%;
`;

const SubtitleWrapper = styled.div`
  width: 327px;
  height: 36px;
  margin-top: 2px;

  display: flex;
  align-items: center;
`;

const Bold = styled.span`
  font-weight: 600;
  font-size: 18px;
  line-height: 160%;

  color: ${COLORS.UIWhite};
`;

const SubtitleLogo = styled.img`
  width: 130px;
  height: 36px;
  margin-left: 9px;
  margin-right: 3px;
`;

const Button = styled.div`
  width: 271px;
  height: 56px;
  margin-top: 56px;

  background: ${COLORS.UIWhite};
  border-radius: 4px;

  color: ${COLORS.primary};
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export default LandingSixth;
