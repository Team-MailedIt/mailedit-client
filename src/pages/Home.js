import MainSidebar from "../components/home/MainSidebar";
import styled from "styled-components";
import HomePresenter from "../components/home/HomePresenter";

const Home = () => {
  return (
    <Wrapper>
      <MainSidebar />
      <HomePresenter />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 1.7fr 8.3fr;
`;

export default Home;
