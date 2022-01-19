import styled from "styled-components";

const SidebarGroup = ({ title, icon, item, onClick }) => {
  return (
    <Wrapper>
      <ItemWrapper onClick={onClick}>
        <IndexGroup>
          {icon}
          <GroupTitle>{title}</GroupTitle>
        </IndexGroup>
        {item}
      </ItemWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 252px;
  height: 24px;

  background: #5274ef;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 12px;
`;

const ItemWrapper = styled.div`
  width: 240px;
  height: 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    cursor: pointer;
  }
`;

const IndexGroup = styled.div`
  width: 172px;
  height: 100%;

  display: flex;
  align-items: center;
`;

const GroupTitle = styled.div`
  width: 160px;
  height: 20px;
  margin-left: 8px;
  line-height: 19px;

  font-size: 16px;
  color: #ffffff;
`;

export default SidebarGroup;
