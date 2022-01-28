import styled from 'styled-components';
import COLORS from '../../constants/colors';
import { FooterLogo } from '../../constants/icons';
import { FooterBodySpan, FooterBodySpanButton } from './Components';
import footerlogo from '../../constants/icons/footerlogo.svg';

const FooterDefault = () => {
  // 일단 확정인 footer만 적용
  return (
    <Container>
      <Box>
        <FooterLogo src={footerlogo} />
        <Wrapper2>
          <FooterBodySpan>
            실무 이메일을 어떻게 써야 할지 막막한 분들을 위한 이메일 작성 보조
            서비스입니다.
          </FooterBodySpan>
          <FooterBodySpan>
            빠르게 완성도 높은 이메일을 작성해 보세요.
          </FooterBodySpan>
        </Wrapper2>
      </Box>
      <Wrapper>
        <Box
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <CopyRights>© 2022 MailedIt ALL RIGHTS RESERVED</CopyRights>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <FooterBodySpanButton style={{ marginRight: '48px' }}>
              이용약관
            </FooterBodySpanButton>
            <FooterBodySpanButton style={{ marginRight: '48px' }}>
              개인정보처리방침
            </FooterBodySpanButton>
            <FooterBodySpanButton>문의하기</FooterBodySpanButton>
          </div>
        </Box>
      </Wrapper>
    </Container>
  );
};
const Box = styled.div`
  margin-left: 106px;
  margin-right: 106px;

  @media screen and (max-width: 1440px) {
    margin-left: 80px;
    margin-right: 80px;
  }
`;

const Wrapper2 = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;

  @media screen and (max-width: 1440px) {
    margin-top: 18px;
  }
`;

const Wrapper = styled.div`
  width: 100vw;
  margin-top: 110px;

  @media screen and (max-width: 1440px) {
    margin-top: 79px;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 400px;
  width: 100vw;

  align-items: start;
  background: ${COLORS.gray8};

  @media screen and (max-width: 1440px) {
    width: 100vw;
    height: 300px;
  }
`;
export const CopyRights = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: ${COLORS.UIWhite};
  display: flex;
  align-items: center;
  @media screen and (max-width: 1440px) {
    font-size: 12px;
  }
`;
export default FooterDefault;
