import styled from 'styled-components';
import { BodyLogo, Illust2 } from '../../constants/icons';
import COLORS from '../../constants/colors';
const BodySecond = () => {
  return (
    <Container>
      <HeadingContainer>
        <Heading style={{ marginRight: '24px' }}>
          메일 작성을 완벽하게 해내다,
        </Heading>
        <BodyLogo src="./img/bodylogo.png" />
      </HeadingContainer>
      <SubHeading>
        개인의 이메일 작성을 개선하는 것에서 나아가 올바른 메일 작성 문화를
        선두합니다.
      </SubHeading>
      <div style={{ paddingTop: '76px' }}>
        <Illust2 src="./img/illust_2.png" />
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 1080px;

  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1440px) {
    height: 900px;
  }
`;
const HeadingContainer = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
`;

const Heading = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 160%;
  color: ${COLORS.bodyBlue};
  display: flex;
  align-items: center;
  @media screen and (max-width: 1440px) {
    font-size: 52px;
  }
`;
const SubHeading = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 140%;
  color: ${COLORS.gray8};
  display: flex;
  align-items: center;
  padding-top: 12px;
  @media screen and (max-width: 1440px) {
    font-size: 20px;
  }
`;

export default BodySecond;
