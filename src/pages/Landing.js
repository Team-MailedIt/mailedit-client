import HeaderContainer from '../components/landing/HeaderContainer';
import FooterContainer from '../components/landing/FooterContainer';
import styled from 'styled-components';
import MobileModal from '../components/landing/MobileModal';
import BodyFirst from '../components/landing/BodyFirst';
import BodySecond from '../components/landing/BodySecond';
import BodyThird from '../components/landing/BodyThird';
import BodyForth from '../components/landing/BodyForth';
import BodyFifth from '../components/landing/BodyFifth';

const Landing = () => {
  return (
    <>
      <MobileModal />
      <Container>
        <HeaderContainer />
        <BodyFirst />
        <BodySecond />
        <BodyThird />
        <BodyForth />
        <BodyFifth />
        <FooterContainer />
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Landing;
