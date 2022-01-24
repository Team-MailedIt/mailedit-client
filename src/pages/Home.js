import MainSidebar from "../components/home/MainSidebar";
import styled from "styled-components";
import HomeContainer from "../components/home/HomeContainer";
import SelectGroupProvider from "../contexts/SelectGroupContext";

const Home = () => {
  return (
    <SelectGroupProvider>
      <Wrapper>
        <MainSidebar />
        <HomeContainer />
      </Wrapper>
    </SelectGroupProvider>
  );
};

const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 1.7fr 8.3fr;
`;

export default Home;
