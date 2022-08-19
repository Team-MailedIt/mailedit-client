import styled from 'styled-components';
import { colors } from '../../constants/colors';

export default function Footer() {
  return (
    <Wrapper>
      <Content>
        <Logo src="/img/landing_footer_logo1.png" alt="footer logo" />
        <Text>
          실무 이메일을 어떻게 써야 할지 막막한 분들을 위한 이메일 작성 보조
          서비스입니다. 빠르게 완성도 높은 이메일을 작성해 보세요.
        </Text>
        <Copyright>© 2022 MailedIt ALL RIGHTS RESERVED</Copyright>
        <Option>
          <Span>이용약관</Span>
          <Span>개인정보처리방침</Span>
          <Span>문의하기</Span>
        </Option>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  width: 100%;
  height: 300px;

  background: ${colors.gray.gray8};

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.section`
  width: 1280px;
  height: 197px;

  display: grid;
  grid-template-columns: 993px 287px;
  grid-template-rows: 60px 118px 19px;
  grid-template-areas: 'logo .' 'text .' 'copyright option';
`;

const Logo = styled.img`
  grid-area: logo;

  width: 146px;
  height: 42px;
`;

const Text = styled.div`
  grid-area: text;

  width: 521px;
  height: 44px;

  font-weight: 300;
  font-size: 16px;
  line-height: 140%;

  color: ${colors.default.white};
`;

const Copyright = styled.span`
  grid-area: copyright;

  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: ${colors.default.white};
`;

const Option = styled.div`
  grid-area: option;

  width: 287px;
  height: 19px;

  display: flex;
  justify-content: space-between;
`;

const Span = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: ${colors.default.white};
`;
