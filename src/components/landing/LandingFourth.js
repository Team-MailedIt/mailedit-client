import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { colors } from '../../constants/colors';
import Pill from './Pill';

const LandingFourth = () => {
  const navigate = useNavigate();

  const goToWorkSpace = () => {
    navigate('/workspace');
  };

  return (
    <Wrapper>
      <Pill isLeftSelected={false} isRightSelected={true} />
      <Section>
        <Content>
          <Video autoPlay loop muted playsInline>
            <source src="/img/landingSecond.webm" type="video/webm" />
          </Video>
          <Title>
            <b>블록</b>으로 쉽게 만드는 나만의 템플릿
          </Title>
          <Subtitle>
            메일의 구조를 반영한 블록을 활용해
            <br />
            보다 쉽게 나만의 템플릿을 만들어 보세요
          </Subtitle>
          <Button onClick={goToWorkSpace}>템플릿 만들러 가기</Button>
        </Content>
      </Section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 580px;
  padding-top: 96px;

  display: flex;
  align-items: center;
  flex-direction: column;

  background: ${colors.bg.bg};
`;

const Section = styled.main`
  width: 100%;
  height: 100%;
  margin-top: 65px;

  display: flex;
  justify-content: center;
`;

const Content = styled.section`
  width: 1120px;
  height: 362px;

  display: grid;
  grid-template-columns: 760px 360px;
  grid-template-rows: 138px 94px 61px;
  grid-template-areas: 'image title' 'image subtitle' 'image button';
`;

const Video = styled.video`
  grid-area: image;
  width: 556px;
`;

const Title = styled.div`
  grid-area: title;

  width: 360px;
  height: 118px;

  font-weight: 400;
  font-size: 42px;
  line-height: 140%;
  text-align: end;

  color: ${colors.default.black};
`;

const Subtitle = styled.div`
  grid-area: subtitle;

  width: 360px;
  height: 62px;

  font-weight: 400;
  font-size: 22px;
  line-height: 140%;
  text-align: end;

  color: ${colors.gray.gray8};
`;

const Button = styled.button`
  grid-area: button;

  width: 183px;
  height: 39px;

  justify-self: end;

  color: ${colors.default.white};
  background: ${colors.main.main};
`;

export default LandingFourth;
