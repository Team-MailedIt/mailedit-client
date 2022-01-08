import { Link } from "react-router-dom";
import Sidebar from "../components/commons/Sidebar";
import styled from "styled-components";

const Home = () => {
  return (
    <Wrapper>
      <Sidebar />
      <h1>I'm home page</h1>
      <Link to={"/workspace"}>
        <span>go to workspace</span>
      </Link>
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
