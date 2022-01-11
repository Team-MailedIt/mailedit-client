import { RowContainer } from './Components';
import COLORS from '../../constants/colors';
import styled from 'styled-components';

const ColorPalet = ({ handleColorPalet, selectedColor }) => {
  const colors = [
    COLORS.tagGreen,
    COLORS.tagRed,
    COLORS.tagYellow,
    COLORS.tagPurple,
    COLORS.tagCyan,
    COLORS.tagBlue,
  ];

  const handleOnClick = (e) => {
    handleColorPalet(e);
  };

  return (
    <RowContainer
      style={{ justifyContent: 'space-between', alignItems: 'center' }}
    >
      {colors.map((element, index) => {
        return (
          <OuterCircle
            selectedColor={selectedColor}
            isSelected={element}
            key={index}
          >
            <Circle
              onClick={() => {
                handleOnClick(element);
              }}
              backgroud={element}
            />
          </OuterCircle>
        );
      })}
    </RowContainer>
  );
};

const OuterCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 24px;
  height: 24px;

  background: ${(props) =>
    props.selectedColor === props.isSelected ? COLORS.gray2 : 'none'};

  border-radius: 50%;
`;

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
