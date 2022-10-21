import styled from 'styled-components';
import { colors } from '../../../constants/colors';

export default function MLandingSixth({ goToHome }) {
  return (
    <Wrapper>
      <Content>
        <TitleWrapper>
          <Title>메일 작성이 어려울 때는?</Title>
          <Logo
            src="/images/landing_sixth_logo1.png"
            alt="landing sixth logo"
          />
        </TitleWrapper>
        <Subtitle>
          실무 이메일 작성이 나에게 매번 어려웠다면?
          <br />
          <b>지금 바로 이용해 보세요.</b>
        </Subtitle>
        <Button onClick={goToHome}>둘러보기</Button>
      </Content>
      <BackgroundImg
        src="/images/mlanding_sixth_image.png"
        alt="landing sixth image"
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  width: 312px;

  position: absolute;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleWrapper = styled.div`
  width: 100%;
  margin-top: 42px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 375px) {
    width: 92%;
  }
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 20px;
  text-align: center;

  color: ${colors.default.white};

  @media screen and (max-width: 375px) {
    font-size: 18px;
  }
`;

const Logo = styled.img`
  width: 108px;
  height: 28px;

  @media screen and (max-width: 375px) {
    width: 104px;
  }
`;

const Subtitle = styled.div`
  margin-top: 11px;

  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  text-align: center;

  color: ${colors.default.white};

  b {
    color: ${colors.default.white};
  }

  @media screen and (max-width: 375px) {
    font-size: 13px;
  }
`;

const Button = styled.button`
  width: 121px;
  height: 26px;
  margin-top: 24px;
  padding-top: 1px;
  border-radius: 2px;

  font-size: 12px;
  font-weight: 600;

  color: ${colors.main.main};
  background: ${colors.default.white};
  box-shadow: 1.68102px 2.01723px 2.01723px rgba(0, 0, 0, 0.1);
`;

const BackgroundImg = styled.img`
  width: 100%;
`;
