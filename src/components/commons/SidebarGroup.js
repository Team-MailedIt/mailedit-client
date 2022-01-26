import styled from "styled-components";
import COLORS from "../../constants/colors";

const SidebarGroup = ({ title, icon, item, onClick }) => {
  return (
    <Wrapper>
      <IndexGroup onClick={onClick}>
        {icon}
        <GroupTitle>{title}</GroupTitle>
      </IndexGroup>
      <Item>{item}</Item>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 240px;
  height: 20px;

  margin-top: 18px;
  padding-right: 4px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const IndexGroup = styled.div`
  width: 172px;
  height: 20px;

  display: flex;
  align-items: center;
`;

const GroupTitle = styled.div`
  width: 160px;
  height: 20px;

  font-size: 16px;
  color: ${COLORS.UIWhite};
`;

const Item = styled.div`
  width: 16px;
  height: 16px;

  overflow: hidden;
  border-radius: 2px;
  border: 1px solid white;
`;

export default SidebarGroup;
