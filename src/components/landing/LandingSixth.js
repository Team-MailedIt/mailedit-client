import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { colors } from '../../constants/colors';

const LandingSixth = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/home');
  };

  return (
    <Wrapper>
      <Content>
        <TitleWrapper>
          <Title>메일 작성이 어려울 때는?</Title>
          <Logo
            src="/img/landing_footer_logo1.png"
            alt="landing sixth logo 1"
          />
        </TitleWrapper>
        <Subtitle1>실무 이메일 작성이 나에게 매번 어려웠다면?</Subtitle1>
        <Subtitle2Wrapper>
          <Subtitle2>지금 바로</Subtitle2>
          <Logo2
            src="/img/landing_footer_logo2.png"
            alt="landing sixth logo 2"
          />
          <Subtitle2>을 이용해 보세요</Subtitle2>
        </Subtitle2Wrapper>
        <Button onClick={goToHome}>둘러보기</Button>
      </Content>
      <BackgroundImg src="/img/landing_footer.png" alt="landing sixth image" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;

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
  grid-area: title;

  width: 400px;
  height: 64px;

  font-weight: 700;
  font-size: 40px;
  line-height: 160%;

  color: ${colors.default.white};
`;

const Logo = styled.img`
  width: 240px;
  height: 64px;
`;

const Subtitle1 = styled.div`
  width: 313px;
  height: 29px;
  margin-top: 28px;

  font-weight: 400;
  font-size: 18px;
  line-height: 160%;
  color: ${colors.default.white};
`;

const Subtitle2Wrapper = styled.div`
  width: 332px;
  height: 36px;
  margin-top: 2px;

  display: flex;
  align-items: center;
`;

const Subtitle2 = styled.span`
  font-weight: 600;
  font-size: 18px;
  line-height: 160%;
  margin-top: 4px;

  color: ${colors.default.white};
`;

const Logo2 = styled.img`
  width: 130px;
  margin-left: 12px;
  margin-right: 4px;
`;

const BackgroundImg = styled.img`
  width: 100%;
`;

const Button = styled.button`
  width: 271px;
  height: 56px;
  margin-top: 56px;

  font-size: 20px;
  line-height: 24px;
  font-weight: 600;

  color: ${colors.main.main};
  background: ${colors.default.white};
  box-shadow: 3.7523px 4.50276px 4.50276px rgba(0, 0, 0, 0.1);
`;

export default LandingSixth;
