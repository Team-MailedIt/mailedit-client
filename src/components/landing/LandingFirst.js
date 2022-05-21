import { useNavigate } from 'react-router';
import styled from 'styled-components';
import COLORS from '../../constants/colors';

const LandingFirst = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/home');
  };

  return (
    <Wrapper>
      <TextWrapper>
        <Title>
          회사에서 자주 쓰는 실무 이메일, <br /> 어떻게 써야 할지 막막하지는
          않으셨나요?
        </Title>
        <SubTitle>
          MailedIt은 자체 제작 기본 템플릿과 자신만의 메일 템플릿 만들기로 보다
          쉽게 실무 이메일을 작성할 수 있도록 돕는 서비스입니다.
        </SubTitle>
        <Button onClick={goToHome}>둘러보기</Button>
      </TextWrapper>
      <Image src={`${process.env.PUBLIC_URL}/img/landing_illust_1.png`} />

      <Responsive>
        <Title2>
          회사에서 자주 쓰는 실무 이메일, <br /> 어떻게 써야 할지 막막하지는
          않으셨나요?
        </Title2>
        <SubTitle2>
          MailedIt으로 보다 쉽게 실무 이메일을 작성해 보세요
        </SubTitle2>
        <Image2 src={`${process.env.PUBLIC_URL}/img/landing_illust_1.png`} />
        <Button2 onClick={goToHome}>둘러보기</Button2>
      </Responsive>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 456px;
  margin-top: 92px;

  display: flex;
  justify-content: space-evenly;

  @media screen and (max-width: 768px) {
    margin: 8%;
    margin-top: 10%;
  }
`;

const TextWrapper = styled.div`
  width: 574px;
  height: 283px;

  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Title = styled.div`
  width: 574px;
  height: 100px;
  margin-bottom: 20px;

  font-weight: 600;
  font-size: 36px;
  line-height: 140%;
  letter-spacing: -0.01em;
`;

const SubTitle = styled.div`
  width: 425px;
  height: 45px;
  margin-bottom: 75px;

  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: ${COLORS.gray8};
`;

const Button = styled.div`
  width: 196px;
  height: 43px;
  border-radius: 4px;

  background: ${COLORS.primary};
  color: ${COLORS.UIWhite};
  font-weight: 500;
  font-size: 16px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;

const Image = styled.img`
  width: 479px;
  height: 330px;

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
`;

const Title2 = styled.div`
  /* width: 574px; */
  /* height: 80px; */
  margin: 20px 0;

  font-weight: 600;
  font-size: 20px;
  line-height: 140%;
  letter-spacing: -0.01em;
  text-align: center;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const SubTitle2 = styled.div`
  /* width: 425px; */
  width: 100%;
  margin-bottom: 36px;

  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: ${COLORS.gray8};
  text-align: center;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const Button2 = styled.div`
  width: 137px;
  height: 30px;
  border-radius: 4px;

  background: ${COLORS.primary};
  color: ${COLORS.UIWhite};
  font-weight: 500;
  font-size: 12px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const Image2 = styled.img`
  width: 301px;
  height: 207px;
  margin-bottom: 48px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export default LandingFirst;
