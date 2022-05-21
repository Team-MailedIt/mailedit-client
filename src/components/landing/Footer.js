import styled from 'styled-components';
import COLORS from '../../constants/colors';

const Footer = () => {
  return (
    <Wrapper>
      <Content>
        <Left>
          <Logo
            src={`${process.env.PUBLIC_URL}/img/landing_footer_logo2.png`}
          />
          <Description>
            실무 이메일을 어떻게 써야 할지 막막한 분들을 위한 이메일 작성 보조
            서비스입니다.
            <br />
            빠르게 완성도 높은 이메일을 작성해 보세요.
          </Description>
          <Copyright>© 2022 MailedIt ALL RIGHTS RESERVED</Copyright>
        </Left>
        <Right>
          <Span>이용약관</Span>
          <Span>개인정보처리방침</Span>
          <Span>문의하기</Span>
        </Right>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* width: 1440px; */
  width: 100vw;
  height: 300px;

  background: ${COLORS.gray8};

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  width: 1280px;
  height: 188px;

  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  width: 519px;
  height: 197px;

  display: flex;
  flex-direction: column;
`;

const Logo = styled.img`
  width: 146px;
  height: 42px;
`;

const Description = styled.div`
  width: 519px;
  height: 44px;
  margin-top: 18px;

  color: ${COLORS.UIWhite};
  font-weight: 300;
  font-size: 16px;
  line-height: 140%;
`;

const Copyright = styled.div`
  width: 217px;
  height: 14px;
  margin-top: 79px;

  color: ${COLORS.UIWhite};
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;
`;

const Right = styled.div`
  width: 287px;
  height: 19px;
  margin-top: 178px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Span = styled.span`
  color: ${COLORS.UIWhite};
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;

  cursor: pointer;
`;

export default Footer;
