import { RowContainer } from './Components';
import COLORS from '../../constants/colors';
import styled from 'styled-components';

const ColorPalet = () => {
  const colors = [
    COLORS.tagGreen,
    COLORS.tagRed,
    COLORS.tagYellow,
    COLORS.tagPurple,
    COLORS.tagCyan,
    COLORS.tagBlue,
  ];
  return (
    <RowContainer style={{ justifyContent: 'space-between' }}>
      {colors.map((element, index) => {
        return <Circle key={index} backgroud={element} />;
      })}
    </RowContainer>
  );
};

const Circle = styled.div`
  width: 16px;
  height: 16px;

  background: ${(props) => props.backgroud};

  border-radius: 50%;

  &:hover {
    cursor: pointer;
  }
`;

export default ColorPalet;
