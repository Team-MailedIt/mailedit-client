import styled from 'styled-components';
import { colors } from '../../../constants/colors';

export default function MHeader() {
  return (
    <Wrapper>
      <Items>
        <Logo src="/images/mhome_logo.png" alt="mobile home logo" />
        <Span>로그아웃</Span>
      </Items>
      <Memo>마이템플릿 등의 더 많은 기능들은 PC에서 확인해 보세요.</Memo>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  width: 100%;
  height: 89px;
  background: ${colors.main.main};

  display: flex;
  flex-direction: column;
`;

const Items = styled.div`
  width: 90%;
  margin-top: 20px;

  display: flex;
  align-items: center;
  align-self: center;
  justify-content: space-between;
`;

const Memo = styled.span`
  margin-top: 10px;
  margin-left: 5%;

  font-weight: 500;
  font-size: 12px;
  color: ${colors.alert.alert};
`;

const Logo = styled.img`
  width: 132px;
  height: 26px;
`;

const Span = styled.span`
  font-weight: 400;
  font-size: 12px;
  color: ${colors.default.white};

  cursor: pointer;
`;
