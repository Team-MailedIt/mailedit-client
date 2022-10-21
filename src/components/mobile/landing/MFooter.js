import styled from 'styled-components';
import { colors } from '../../../constants/colors';

export default function MFooter() {
  return (
    <Wrapper>
      <Content>
        <Logo
          src="/images/mlanding_footer_logo.png"
          alt="mobile landing footer logo"
        />
        <Text>
          실무 이메일 작성이 막막한 분들을 위한 이메일 작성 보조 서비스입니다.
          <br />
          빠르게 완성도 높은 이메일을 작성해 보세요.
        </Text>
        <Bottom>
          <Span>© 2022 MailedIt ALL RIGHTS RESERVED</Span>
          <Span className="notion-button">문의하기</Span>
        </Bottom>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 216px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${colors.gray.gray8};
`;

const Content = styled.div`
  width: 88%;
`;

const Logo = styled.img`
  width: 94px;
  height: 25px;
`;

const Text = styled.div`
  margin-top: 12px;

  font-weight: 300;
  font-size: 12px;
  line-height: 140%;
  color: ${colors.gray.gray4};
`;

const Bottom = styled.div`
  width: 100%;
  margin-top: 44px;

  display: flex;
  justify-content: space-between;
`;

const Span = styled.span`
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  color: ${colors.gray.gray4};
`;
