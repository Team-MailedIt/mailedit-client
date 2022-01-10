import styled from 'styled-components';
import COLORS from '../../constants/colors';
import { FooterLogo } from '../../constants/icons';
import { FooterBodySpan, FooterBodySpanButton } from './Components';

const FooterDefault = () => {
  // 일단 확정인 footer만 적용
  return (
    <Container>
      <FooterLogo
        src="./img/footerlogo.png"
        style={{ marginTop: '72px', marginLeft: '106px' }}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginTop: '40px',
          marginLeft: '106px',
        }}
      >
        <FooterBodySpan>
          실무 이메일을 어떻게 써야 할지 막막한 분들을 위한 이메일 작성 보조
          서비스입니다.
        </FooterBodySpan>
        <FooterBodySpan>
          빠르게 완성도 높은 이메일을 작성해 보세요.
        </FooterBodySpan>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100vw',
          justifyContent: 'space-between',
          marginTop: '110px',
        }}
      >
        <CopyRights style={{ marginLeft: '106px' }}>
          © 2022 MailedIt ALL RIGHTS RESERVED
        </CopyRights>
        <div
          style={{ display: 'flex', flexDirection: 'row', marginRight: '98px' }}
        >
          <FooterBodySpanButton style={{ marginRight: '48px' }}>
            이용약관
          </FooterBodySpanButton>
          <FooterBodySpanButton style={{ marginRight: '48px' }}>
            개인정보처리방침
          </FooterBodySpanButton>
          <FooterBodySpanButton>문의하기</FooterBodySpanButton>
        </div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 400px;
  width: 100vw;

  align-items: start;

  background: ${COLORS.gray8};
`;
export const CopyRights = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: ${COLORS.UIWhite};
  display: flex;
  align-items: center;
`;
export default FooterDefault;
