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
  width: 1920px;
  height: 1080px;

  display: flex;
  flex-direction: row;
  border: 1px solid grey;
`;

export default Home;
