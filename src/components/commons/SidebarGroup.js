import styled from 'styled-components';
import COLORS from '../../constants/colors';

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
  width: 190px;

  margin-top: 10px;
  padding-right: 6px;
  padding-left: 3px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const IndexGroup = styled.div`
  width: 129px;
  height: 15px;

  display: flex;
  align-items: center;
`;

const GroupTitle = styled.div`
  width: 120px;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  font-weight: 300;
  font-size: 12px;
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
