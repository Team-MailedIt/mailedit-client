import styled from 'styled-components';
import COLORS from '../../constants/colors';

const LandingFirst = () => {
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
        <Button>둘러보기</Button>
      </TextWrapper>
      <Image src={`${process.env.PUBLIC_URL}/img/landing_illust_1.png`} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 456px;
  margin-top: 92px;

  display: flex;
  justify-content: space-evenly;
`;

const TextWrapper = styled.div`
  width: 574px;
  height: 283px;

  display: flex;
  flex-direction: column;
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

  font-weight: 300;
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
`;

const Image = styled.img`
  width: 479px;
  height: 330px;
`;

export default LandingFirst;
