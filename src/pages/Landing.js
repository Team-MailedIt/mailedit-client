import styled from 'styled-components';
import Footer from '../components/landing/Footer';
import Header from '../components/landing/Header';
import LandingFifth from '../components/landing/LandingFifth';
import LandingFirst from '../components/landing/LandingFirst';
import LandingFourth from '../components/landing/LandingFourth';
import LandingSecond from '../components/landing/LandingSecond';
import LandingSixth from '../components/landing/LandingSixth';
import LandingThird from '../components/landing/LandingThird';
import MobileModal from '../components/landing/MobileModal';

const Landing = () => {
  return (
    <>
      <MobileModal />
      <Wrapper>
        <Header />
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
  overflow: hidden;
`;

export default Landing;
