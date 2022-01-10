import styled from 'styled-components';
import { Illust1 } from '../../constants/icons';
import { MainHeading, MainSubHeading, LookAroundButton } from './Components';

const BodyFirst = () => {
  return (
    <Container>
      <LeftContainer style={{ marginTop: '104px' }}>
        <MainHeading style={{ marginBottom: '24px' }}>
          회사에서 자주 쓰는 실무 이메일,
          <br />
          어떻게 써야 할지 막막하지는 않으셨나요?
        </MainHeading>
        <MainSubHeading style={{ marginBottom: '52px' }}>
          MailedIt은 자체 제작 기본 템플릿과 자신만의 메일 템플릿 만들기로
          <br />
          보다 쉽게 실무 이메일을 작성할 수 있도록 돕는 서비스입니다.
        </MainSubHeading>
        <LookAroundButton>둘러보기</LookAroundButton>
      </LeftContainer>
      <RightContainer style={{ marginLeft: '54px', marginTop: '67px' }}>
        <Illust1 src="./img/illust_1.png" />
      </RightContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 492px;
  width: 100vw;

  justify-content: center;
`;
const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const RightContainer = styled.div`
  display: flex;
`;

export default BodyFirst;
