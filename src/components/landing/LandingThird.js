import { useNavigate } from 'react-router';
import styled from 'styled-components';
import COLORS from '../../constants/colors';
import Pill from './Pill';

const LandingThird = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/home');
  };

  return (
    <Wrapper>
      <Pill isLeftSelected={true} isRightSelected={false} />

      <Content>
        <TextWrapper>
          <TitleWrapper>
            <TitleLeft>자체 제작</TitleLeft>
            <TitleRight>기본템플릿</TitleRight>
          </TitleWrapper>
          <SubTitle>
            가장 자주 쓰는 실무 이메일을 위한 가이드, 기본 템플릿을 사용해
            보세요
          </SubTitle>
          <Link onClick={goToHome}>자세히 알아보기{'>>'}</Link>
        </TextWrapper>

        <Video autoPlay loop muted playsInline>
          <source
            src={`${process.env.PUBLIC_URL}/img/landingFirst.webm`}
            type="video/webm"
          />
        </Video>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* width: 1440px; */
  width: 100vw;
  height: 520px;
  padding-top: 60px;

  background: ${COLORS.bgBlue};

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  width: 100%;
  height: 404px;
  margin-top: 68px;

  display: flex;
  justify-content: flex-end;
`;

const TextWrapper = styled.div`
  width: 371px;
  height: 197px;
  /* margin-right: 15px; */
  margin-right: 3vw;

  display: flex;
  flex-direction: column;
`;

const TitleWrapper = styled.div`
  width: 346px;
  height: 59px;

  color: ${COLORS.UIBlack};

  display: flex;
  align-items: center;
`;

const TitleLeft = styled.div`
  width: 156px;
  height: 59px;
  margin-right: 8px;

  font-weight: 400;
  font-size: 42px;
  line-height: 140%;
`;

const TitleRight = styled.div`
  width: 182px;
  height: 59px;

  font-weight: 700;
  font-size: 42px;
  line-height: 140%;
`;

const SubTitle = styled.div`
  width: 372px;
  height: 62px;
  margin-top: 20px;

  color: ${COLORS.gray8};
  font-weight: 300;
  font-size: 22px;
  line-height: 140%;
`;

const Link = styled.div`
  width: 152px;
  height: 28px;
  margin-top: 28px;

  color: ${COLORS.primary};
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;

  cursor: pointer;
`;

const Video = styled.video`
  width: 894px;
`;

export default LandingThird;
