import styled from "styled-components";
// import COLORS from '../../constants/colors';

const Dots = ({ color }) => {
  return <Circle backgroud={color} />;
};

const Circle = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 70%;
  background: ${(props) => props.backgroud};

  &:hover {
    cursor: pointer;
  }
`;
export default Dots;
