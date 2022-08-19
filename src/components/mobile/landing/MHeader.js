import styled from 'styled-components';
import { colors } from '../../../constants/colors';

export default function Header() {
  return (
    <Wrapper>
      <Top>
        <Logo src="/images/landing_header_logo.png" alt="landing header logo" />
        <Option>
          <Span>로그인</Span>
          <Border />
          <Span>회원가입</Span>
        </Option>
      </Top>
      <Video autoPlay loop muted playsInline>
        <source src="/videos/mobile_landing_header.mp4" type="video/mp4" />
      </Video>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
`;

const Video = styled.video`
  width: 100%;
  display: block;
`;

const Top = styled.div`
  width: 90%;
  margin-top: 20px;

  position: absolute;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 132px;
  height: 26px;
`;

const Span = styled.span`
  font-weight: 400;
  font-size: 12px;
  color: ${colors.main.indigo1};
`;

const Option = styled.div`
  /* width: 29%; */
  width: 106px;
  display: flex;
  justify-content: space-between;
`;

const Border = styled.div`
  width: 1px;
  height: 12px;
  background: ${colors.default.white};
`;
