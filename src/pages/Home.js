import styled from "styled-components";

import FilterLikeProvider from "../contexts/FilterLikeContext";
import SelectGroupProvider from "../contexts/SelectGroupContext";
import SelectTemplateProvider from "../contexts/SelectTemplateContext";

import MainSidebar from "../components/home/MainSidebar";
import HeaderArea from "../components/home/HeaderArea";
import BaseTemplateArea from "../components/home/BaseTemplateArea";
import MyTemplateArea from "../components/home/MyTemplateArea";

const Home = () => {
  return (
    <SelectGroupProvider>
      <SelectTemplateProvider>
        <FilterLikeProvider>
          <Wrapper>
            <MainSidebar />
            <Main>
              <HeaderArea />
              <MyTemplateArea />
              <BaseTemplateArea />
            </Main>
          </Wrapper>
        </FilterLikeProvider>
      </SelectTemplateProvider>
    </SelectGroupProvider>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1.7fr 8.3fr;
`;

const Main = styled.main`
  width: 1592px;

  display: flex;
  flex-direction: column;
`;

export default Home;
