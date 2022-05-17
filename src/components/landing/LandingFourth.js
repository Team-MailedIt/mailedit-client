import { useNavigate } from 'react-router';
import styled from 'styled-components';
import COLORS from '../../constants/colors';
import Pill from './Pill';

const LandingFourth = () => {
  const navigate = useNavigate();

  const goToWorkSpace = () => {
    navigate('/workspace');
  };

  return (
    <Wrapper>
      <Pill isLeftSelected={false} isRightSelected={true} />

      <Content>
        <Video autoPlay loop muted playsInline>
          <source
            src={`${process.env.PUBLIC_URL}/img/landingSecond.webm`}
            type="video/webm"
          />
        </Video>

        <TextWrapper>
          <TitleWrapper>
            <FirstTitle>
              <Bold>블록</Bold>
              <Normal>으로 쉽게 만드는</Normal>
            </FirstTitle>
            <Normal>나만의 템플릿</Normal>
          </TitleWrapper>
          <SubTitle>
            메일의 구조를 활용한 블록을 활용해
            <br />
            보다 쉽게 나만의 템플릿을 만들어 보세요
          </SubTitle>
          <Button onClick={goToWorkSpace}>템플릿 만들러 가기</Button>
        </TextWrapper>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 1440px;
  height: 484px;
  padding-top: 96px;

  background: ${COLORS.bgBlue};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  width: 1120px;
  height: 362px;
  margin-top: 65px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Video = styled.video`
  width: 556px;
`;

const TextWrapper = styled.div`
  width: 360px;
  height: 271px;

  display: flex;
  flex-direction: column;
`;

const TitleWrapper = styled.div`
  width: 100%;
  height: 118px;

  color: ${COLORS.UIBlack};

  display: flex;
  flex-direction: column;
  align-items: end;
`;

const FirstTitle = styled.div`
  width: 348px;
  height: 59px;

  display: flex;
`;

const Bold = styled.div`
  width: 73px;
  height: 59px;

  font-weight: 700;
  font-size: 42px;
  line-height: 140%;
`;

const Normal = styled.div`
  width: 276px;
  height: 59px;

  font-weight: 400;
  font-size: 42px;
  line-height: 140%;

  display: flex;
  justify-content: flex-end;
`;

const SubTitle = styled.div`
  width: 360px;
  height: 62px;
  margin-top: 20px;

  color: ${COLORS.gray8};
  font-weight: 300;
  font-size: 22px;
  line-height: 140%;
  text-align: right;
`;

const Button = styled.div`
  width: 183px;
  height: 39px;
  margin-top: 32px;
  margin-left: 177px;

  background: ${COLORS.primary};
  border-radius: 4px;

  color: ${COLORS.UIWhite};
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;

export default LandingFourth;
