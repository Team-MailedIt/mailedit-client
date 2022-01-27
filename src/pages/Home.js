import MainSidebar from "../components/home/MainSidebar";
import styled from "styled-components";
import HomeContainer from "../components/home/HomeContainer";
import SelectGroupProvider from "../contexts/SelectGroupContext";
import SelectTemplateProvider from "../contexts/SelectTemplateContext";
import FilterLikeProvider from "../contexts/FilterLikeContext";

const Home = () => {
  return (
    <SelectGroupProvider>
      <SelectTemplateProvider>
        <FilterLikeProvider>
          <Wrapper>
            <MainSidebar />
            <HomeContainer />
          </Wrapper>
        </FilterLikeProvider>
      </SelectTemplateProvider>
    </SelectGroupProvider>
  );
};

const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 1.7fr 8.3fr;
`;

export default Home;
