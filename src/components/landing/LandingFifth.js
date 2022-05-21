import styled from 'styled-components';
import COLORS from '../../constants/colors';

const LandingFifth = () => {
  return (
    <Wrapper>
      <Content>
        <Image src={`${process.env.PUBLIC_URL}/img/landing_img_5.png`} />
        <TextWrapper>
          <Normal>빠르게 꺼내 쓰는</Normal>
          <Bold>마이템플릿</Bold>
          <Subtitle>
            효율적인 그룹 기능과 정렬 방식으로
            <br />
            저장된 템플릿을 빠르게 사용해 보세요
          </Subtitle>
        </TextWrapper>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 1440px;
  height: 512px;
  padding-top: 68px;

  background: ${COLORS.bgBlue};
`;

const Content = styled.div`
  width: 1280px;
  height: 430px;

  display: flex;

  color: ${COLORS.UIBlack};
  font-weight: 700;
  font-size: 42px;
  line-height: 140%;
`;

const Image = styled.img`
  width: 900px;
  height: 430px;
`;

const TextWrapper = styled.div`
  width: 335px;
  height: 200px;
  margin-left: 45px;
`;

const Normal = styled.div`
  width: 335px;
  height: 59px;

  color: ${COLORS.UIBlack};
  font-weight: 300;
  font-size: 42px;
  line-height: 140%;
  text-align: right;
`;

const Bold = styled.div`
  width: 335px;
  height: 59px;

  text-align: right;
`;

const Subtitle = styled.div`
  width: 335px;
  height: 62px;
  margin-top: 20px;

  font-weight: 300;
  font-size: 22px;
  line-height: 140%;
  text-align: right;
`;

export default LandingFifth;
