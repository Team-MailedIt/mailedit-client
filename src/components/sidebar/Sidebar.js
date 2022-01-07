import styled from 'styled-components';

const Sidebar = () => {
  return <SidebarContainer />;
};

export const SidebarContainer = styled.section`
  width: 20%;
  height: 100vh;
  min-width: 180px;

  display: grid;
  grid-template-rows: 1.75fr 6.25fr 2fr;
  grid-template-areas:
    'logo'
    'menus'
    'signout';

  background: red;
`;

export default Sidebar;
