import styled from 'styled-components';
import Header from '../components/landing/Header';
import MobileModal from '../components/landing/MobileModal';

const Landing = () => {
  return (
    <>
      <MobileModal />
      <Wrapper>
        <Header />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 1440px;
  border: 3px solid red;
`;

export default Landing;
