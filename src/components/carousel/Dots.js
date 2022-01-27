import styled from 'styled-components';
// import COLORS from '../../constants/colors';

const Dots = ({ color }) => {
  return <Circle backgroud={color} />;
};

const Circle = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${(props) => props.backgroud};
  margin-left: 4px;
  margin-right: 4px;

  &:hover {
    cursor: pointer;
  }
`;
export default Dots;
