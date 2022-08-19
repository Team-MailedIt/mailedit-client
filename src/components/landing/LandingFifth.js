import styled from 'styled-components';
import { colors } from '../../constants/colors';

const LandingFifth = () => {
  return (
    <Wrapper>
      <Section>
        <Content>
          <Image src="/img/landing_img_5.png" alt="landing fifth image" />
          <Title>
            빠르게 꺼내 쓰는
            <br />
            <b>마이템플릿</b>
          </Title>
          <Subtitle>
            효율적인 그룹 기능과 정렬 방식으로
            <br />
            저장된 템플릿을 빠르게 사용해 보세요
          </Subtitle>
        </Content>
      </Section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 580px;
  padding-top: 83px;

  background: ${colors.bg.bg};
`;

const Section = styled.main`
  width: 100%;
  height: 100%;

  display: flex;
`;

const Content = styled.section`
  width: 1280px;
  height: 430px;

  display: grid;
  grid-template-columns: 945px 335px;
  grid-template-rows: 138px 292px;
  grid-template-areas: 'image title' 'image subtitle';
`;

const Image = styled.img`
  width: 900px;
  height: 430px;
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
export default LandingFifth;
