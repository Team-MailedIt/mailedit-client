import MainSidebar from '../components/home/MainSidebar';
import styled from 'styled-components';
import HomeContainer from '../components/home/HomeContainer';
import { PositionProvider } from '../contexts/ElementPositionContexts';

const Home = () => {
  return (
    <Wrapper>
      <PositionProvider>
        <MainSidebar />
        <HomeContainer />
      </PositionProvider>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 1.7fr 8.3fr;
`;

export default Home;
