import MainSidebar from "../components/home/MainSidebar";
import styled from "styled-components";
import HomeContainer from "../components/home/HomeContainer";

const Home = () => {
  return (
    <Wrapper>
      <MainSidebar />
      <HomeContainer />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 1.7fr 8.3fr;
`;

export default Home;
