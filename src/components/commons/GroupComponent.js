import styled from 'styled-components';
import COLORS from '../../constants/colors';

const GroupComponent = ({ name, color, id, selected, handleSelectGroup }) => {
  const onClick = () => {
    handleSelectGroup({
      id: id,
      name: name,
      color: color,
    });
  };

  return (
    <Wrapper selected={selected} title={name} onClick={onClick}>
      <Index color={color} />
      <Title style={{ marginLeft: '8px' }}>{name}</Title>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding-left: 8px;
  padding-top: 4px;
  padding-bottom: 4px;

  background: ${(props) =>
    props.selected === props.title ? COLORS.indigo0 : 'none'};

  border-radius: 2px;

  &:hover {
    cursor: pointer;
  }
`;

const Index = styled.div`
  width: 4px;
  height: 16px;

  border-radius: 1px;
  background: ${(props) => props.color};
`;

const Title = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: ${COLORS.gray8};
  display: flex;
  align-items: center;
`;

export default GroupComponent;
