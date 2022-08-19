import styled from 'styled-components';
import { colors } from '../../../constants/colors';

export default function MLandingFifth() {
  return (
    <Wrapper>
      <Image src="/images/mlanding_fifth_image.png" alt="landing fifth image" />
      <Text>
        <Title>
          빠르게 꺼내 쓰는
          <br />
          <b>마이템플릿</b>
        </Title>
        <Subtitle>
          효율적인 그룹과 정렬 기능으로
          <br />
          템플릿을 빠르게 사용하세요
        </Subtitle>
      </Text>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  padding-top: 12px;
  padding-right: 24px;
  background: ${colors.bg.bg};

  display: flex;
  justify-content: space-between;
`;

const Image = styled.img`
  /* width: 206px; */
  /* height: 223px; */

  width: 51%;
`;

const Text = styled.div`
  height: 114px;
  /* margin-right: 10%; */

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 375px) {
    height: 108px;
  }
`;

const Title = styled.div`
  font-weight: 400;
  font-size: 24px;
  line-height: 140%;

  text-align: right;
  letter-spacing: -0.02em;

  color: ${colors.default.black};

  @media screen and (max-width: 375px) {
    font-size: 21px;
  }
`;

const Subtitle = styled.div`
  font-weight: 300;
  font-size: 14px;
  line-height: 140%;

  text-align: right;
  letter-spacing: -0.02em;

  color: ${colors.default.black};

  @media screen and (max-width: 375px) {
    font-size: 12px;
  }
`;
