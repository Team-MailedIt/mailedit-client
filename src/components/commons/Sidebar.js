import styled from "styled-components";
import COLORS from "../../constants/colors";

import search from "../../constants/icons/sidebar/search.svg";
import logo from "../../constants/icons/sidebar/logo.svg";

const Sidebar = () => {
  return (
    <Wrapper>
      <Logo src={logo} />
      <SearchingField />
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  width: 328px;
  height: 1080px;

  background: ${COLORS.sidebar};
`;

const Logo = styled.img`
  width: 220px;
  height: 44px;
  margin: 36px 68px 48px 40px;
`;

const SearchingField = styled.input`
  width: 252px;
  height: 38px;

  background: ${COLORS.indigo4};
  border: none;
  border-radius: 2px;
  margin: 0px 36px 0px 40px;

  & :focus {
    border: none;
  }
`;

export default Sidebar;
