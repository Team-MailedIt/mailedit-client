import MainSidebar from "../components/home/MainSidebar";
import styled from "styled-components";
import HomeWrapper from "../components/home/HomeWrapper";

const Home = () => {
  return (
    <Wrapper>
      <MainSidebar />
      <HomeWrapper />
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
