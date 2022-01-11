import styled from 'styled-components';
import COLORS from '../../constants/colors';

const GroupComponent = ({ title, color }) => {
  return (
    <Wrapper>
      <Index color={color} />
      <Title style={{ marginLeft: '8px' }}>{title}</Title>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Index = styled.div`
  width: 4px;
  height: 16px;

  border-radius: 1px;
  background: ${(props) => props.color};
`;

const Title = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: ${COLORS.gray8};
  display: flex;
  align-items: center;
`;

export default GroupComponent;
