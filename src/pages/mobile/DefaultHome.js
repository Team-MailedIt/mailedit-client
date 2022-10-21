import styled from 'styled-components';
import MBody from '../../components/mobile/defaultHome/MBody';
import MHeader from '../../components/mobile/defaultHome/MHeader';
import MPopup from '../../components/mobile/defaultHome/MPopup';

export default function MDefaultHome() {
  return (
    <Wrapper>
      <MHeader />
      <MBody />
      <MPopup />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  max-width: 1024px;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
