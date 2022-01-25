import MainSidebar from "../components/home/MainSidebar";
import styled from "styled-components";
import HomeContainer from "../components/home/HomeContainer";
import SelectGroupProvider from "../contexts/SelectGroupContext";
import SelectBaseProvider from "../contexts/SelectBaseContext";

const Home = () => {
  return (
    <SelectGroupProvider>
      <SelectBaseProvider>
        <Wrapper>
          <MainSidebar />
          <HomeContainer />
        </Wrapper>
      </SelectBaseProvider>
    </SelectGroupProvider>
  );
};

const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 1.7fr 8.3fr;
`;

export default Home;
