import styled from 'styled-components';
import Footer from '../components/landing/Footer';
import LandingFifth from '../components/landing/LandingFifth';
import LandingFirst from '../components/landing/LandingFirst';
import LandingFourth from '../components/landing/LandingFourth';
import LandingSecond from '../components/landing/LandingSecond';
import LandingSixth from '../components/landing/LandingSixth';
import LandingThird from '../components/landing/LandingThird';
import MobileModal from '../components/landing/MobileModal';
import MLanding from './mobile/MLanding';

const Landing = () => {
  return (
    <>
      {/* <MobileModal /> */}
      <MLanding />
      <Wrapper>
        <LandingFirst />
        <LandingSecond />
        <LandingThird />
        <LandingFourth />
        <LandingFifth />
        <LandingSixth />
        <Footer />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  min-width: 1024px;
  max-width: 100%;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export default Landing;
