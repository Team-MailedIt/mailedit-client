import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { colors } from '../../constants/colors';
import Pill from './Pill';

const LandingThird = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/home');
  };

  return (
    <Wrapper>
      <Pill isLeftSelected={true} isRightSelected={false} />
      <Section>
        <Content>
          <Title>
            자체 제작 <b>기본템플릿</b>
          </Title>
          <Subtitle>
            가장 자주 쓰는 실무 이메일을 위한 가이드, 기본템플릿을 사용해
            보세요.
          </Subtitle>
          <Button onClick={goToHome}>자세히 알아보기{' >>'}</Button>
          <Video autoPlay loop muted playsInline>
            <source src="/img/landingFirst.webm" type="video/webm" />
          </Video>
        </Content>
      </Section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 580px;
  padding-top: 60px;
  margin-top: 134px;

  display: flex;
  align-items: center;
  flex-direction: column;

  background: ${colors.bg.bg};
`;

const Section = styled.main`
  width: 100%;
  height: 100%;
  margin-top: 69px;

  display: flex;
  justify-content: flex-end;
`;

const Content = styled.section`
  width: 1280px;

  display: grid;
  grid-template-columns: 386px 894px;
  grid-template-rows: 79px 90px 207px;
  grid-template-areas: 'title image' 'subtitle image' 'button image';
`;

const Title = styled.div`
  grid-area: title;

  width: 350px;
  height: 59px;

  font-weight: 400;
  font-size: 42px;
  line-height: 140%;
  color: ${colors.default.black};
`;

const Subtitle = styled.div`
  grid-area: subtitle;

  width: 371px;
  height: 62px;

  font-weight: 400;
  font-size: 22px;
  line-height: 140%;
  color: ${colors.gray.gray8};
`;

const Button = styled.button`
  grid-area: button;

  width: 169px;
  height: 28px;

  font-size: 20px;
  line-height: 140%;

  color: ${colors.main.main};
`;

const Video = styled.video`
  width: 894px;
`;

export default LandingThird;
