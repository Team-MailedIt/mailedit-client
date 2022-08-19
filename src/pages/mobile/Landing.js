import styled from 'styled-components';
import MFooter from '../../components/mobile/landing/MFooter';
import MHeader from '../../components/mobile/landing/MHeader';
import MLandingFifth from '../../components/mobile/landing/MLandingFifth';
import MLandingFirst from '../../components/mobile/landing/MLandingFirst';
import MLandingFourth from '../../components/mobile/landing/MLandingFourth';
import MLandingSecond from '../../components/mobile/landing/MLandingSecond';
import MLandingSixth from '../../components/mobile/landing/MLandingSixth';
import MLandingThird from '../../components/mobile/landing/MLandingThird';

export default function MLanding() {
  return (
    <Wrapper>
      <MHeader />
      <MLandingFirst />
      <MLandingSecond />
      <MLandingThird />
      <MLandingFourth />
      <MLandingFifth />
      <MLandingSixth />
      <MFooter />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  min-width: 375px;
  max-width: 1024px;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
