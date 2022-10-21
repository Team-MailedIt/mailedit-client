import styled from 'styled-components';

import FilterLikeProvider from '../contexts/FilterLikeContext';
import SelectGroupProvider from '../contexts/SelectGroupContext';
import SelectTemplateProvider from '../contexts/SelectTemplateContext';
import { PositionProvider } from '../contexts/ElementPositionContexts';

import MainSidebar from '../components/home/MainSidebar';
import HeaderArea from '../components/home/HeaderArea';
import BaseTemplateArea from '../components/home/BaseTemplateArea';
import MyTemplateArea from '../components/home/MyTemplateArea';
import DefaultHome from './mobile/DefaultHome';
import UserHome from './mobile/UserHome';

import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const Home = () => {
  const { isLogin } = useContext(AuthContext);

  return (
    <SelectGroupProvider>
      <SelectTemplateProvider>
        <FilterLikeProvider>
          <PositionProvider>
            {!isLogin ? <UserHome /> : <DefaultHome />}
            <Wrapper>
              <MainSidebar />
              <Main>
                <HeaderArea />
                <MyTemplateArea />
                <BaseTemplateArea />
              </Main>
            </Wrapper>
          </PositionProvider>
        </FilterLikeProvider>
      </SelectTemplateProvider>
    </SelectGroupProvider>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  min-width: 1024px;
  height: 100vh;

  display: grid;
  grid-template-areas: 'sidebar main';
  grid-template-columns: 17% 83%;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Main = styled.main`
  grid-area: main;

  padding: 0% 3%;

  display: flex;
  flex-direction: column;

  /* @media screen and (min-width: 1500px) {
    padding-right: 7%;
  } */
`;

export default Home;
