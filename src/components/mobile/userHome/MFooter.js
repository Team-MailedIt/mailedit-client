import styled from 'styled-components';
import { colors } from '../../../constants/colors';

export default function MFooter() {
  return (
    <Wrapper>
      <Span>혹시 원하는 메일 템플릿이 없으신가요?</Span>
      <Div>
        <Span>지금 바로</Span>
        <Logo src="/images/mhome_footer_logo.svg" alt="mobile home logo" />
        <Span>팀에 원하는 템플릿을 요청해 주세요!</Span>
      </Div>
      <Button>템플릿 요청하기</Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 168px;
  margin-top: 23px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: ${colors.bg.bg};
`;

const Div = styled.div`
  display: flex;
  align-items: center;

  margin-top: 4px;
`;

const Span = styled.span`
  font-weight: 00;
  font-size: 12px;
  color: ${colors.gray.gray8};
`;

const Logo = styled.img`
  margin: 0 4px;
  width: 79px;
  height: 16px;
`;

const Button = styled.button`
  width: 127px;
  height: 28px;
  border-radius: 2px;
  margin-top: 20px;

  font-weight: 500;
  font-size: 10px;

  color: ${colors.default.white};
  background: ${colors.main.main};
`;
