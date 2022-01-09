import { Link } from 'react-router-dom';
import HeaderContainer from '../components/landing/HeaderContainer';
import BodyContainer from '../components/landing/BodyContainer';
import FooterContainer from '../components/landing/FooterContainer';
import styled from 'styled-components';

const Landing = () => {
  return (
    <Container>
      <HeaderContainer />
      <BodyContainer />
      <FooterContainer />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Landing;
