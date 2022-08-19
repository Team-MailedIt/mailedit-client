import { useNavigate } from 'react-router';
import styled from 'styled-components';
import COLORS, { colors } from '../../constants/colors';
import Header from './Header';

const LandingFirst = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/home');
  };

  return (
    <Wrapper>
      <Header />
      <Section>
        <Content>
          <Title>
            회사에서 자주 쓰는 실무 이메일,
            <br />
            어떻게 써야 할지 막막하지는 않으셨나요?
          </Title>
          <Subtitle>
            MailedIt은 자체 제작 기본 템플릿과 자신만의 메일 템플릿 만들기로
            보다 쉽게 실무 이메일을 작성할 수 있도록 돕는 서비스입니다.
          </Subtitle>
          <Button onClick={goToHome}>둘러보기</Button>
          <Image src="/img/landing_illust_1.png" alt="landing first illust" />
        </Content>
      </Section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

const Section = styled.main`
  width: 100%;
  height: 50%;
  padding: 0 9%;

  display: flex;
  justify-content: center;
  margin-top: 92px;
`;

const Content = styled.section`
  width: 1119px;
  height: 330px;

  display: grid;
  grid-template-columns: 640px 479px;
  grid-template-rows: 152px 120px 43px;
  grid-template-areas:
    'title image'
    'subtitle image'
    'button image';
`;

const Title = styled.div`
  grid-area: title;

  width: 575px;
  height: 100px;
  padding-top: 32px;

  font-weight: 600;
  font-size: 36px;
  line-height: 140%;

  letter-spacing: -0.01em;
  color: ${colors.default.black};
`;

const Subtitle = styled.div`
  grid-area: subtitle;

  width: 425px;
  height: 45px;

  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: ${colors.gray.gray8};
`;

const Button = styled.button`
  grid-area: button;

  width: 196px;
  height: 43px;
  border-radius: 4px;

  background: ${colors.main.main};
  color: ${colors.default.white};
`;

const Image = styled.img`
  grid-area: image;

  width: 479px;
  height: 330px;
`;

export default LandingFirst;
