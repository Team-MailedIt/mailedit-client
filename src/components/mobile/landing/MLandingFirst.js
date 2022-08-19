import styled from 'styled-components';
import { colors } from '../../../constants/colors';

export default function MLandingFirst() {
  return (
    <Wrapper>
      <Title>
        학교에서 자주 쓰는 이메일,
        <br />
        어떻게 쓸지 막막하지는 않으셨나요?
      </Title>
      <Subtitle>
        MailedIt은 자체 제작 기본 템플릿과 나만의 템플릿 만들기로
        <br />
        보다 쉬운 이메일 작성을 돕습니다.
      </Subtitle>
      <Items>
        <Button>둘러보기</Button>
        <Image
          src="/images/mlanding_first_image.png"
          alt="landing first illust"
        />
      </Items>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  /* width: 100%; */
  padding: 0 5%;
  margin-top: 48px;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 140%;

  @media screen and (max-width: 375px) {
    font-size: 21px;
  }
`;

const Subtitle = styled.div`
  margin-top: 8px;

  font-weight: 300;
  font-size: 14px;
  line-height: 140%;

  @media screen and (max-width: 375px) {
    font-size: 12px;
  }
`;

const Items = styled.div`
  width: 100%;
  height: 143px;

  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  width: 113px;
  height: 33px;
  margin-top: 28px;
  border-radius: 2px;

  font-weight: 500;
  font-size: 14px;

  background: ${colors.main.main};
  color: ${colors.default.white};
`;

const Image = styled.img`
  width: 211px;
  height: 143px;
`;
