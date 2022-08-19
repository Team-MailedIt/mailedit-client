import styled, { css } from 'styled-components';
import { colors } from '../../constants/colors';

const Pill = ({ isLeftSelected, isRightSelected }) => {
  return (
    <Wrapper>
      <Left isLeftSelected={isLeftSelected}>기본템플릿</Left>
      <Right isRightSelected={isRightSelected}>마이템플릿</Right>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 234px;
  height: 35px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Left = styled.div`
  width: 114px;
  height: 31px;

  font-weight: 500;
  font-size: 20px;
  line-height: 140%;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${colors.default.white};
  border: 2px solid ${colors.main.indigo5};
  border-right: 1px solid ${colors.main.indigo5};
  border-radius: 16px 0px 0px 16px;

  ${({ isLeftSelected }) =>
    isLeftSelected
      ? css`
          color: ${colors.default.white};
          background: ${colors.main.indigo5};
        `
      : css`
          color: ${colors.main.indigo5};
          background: none;
        `}
`;

const Right = styled.div`
  width: 114px;
  height: 31px;

  font-weight: 500;
  font-size: 20px;
  line-height: 140%;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${colors.main.indigo5};
  border: 2px solid ${colors.main.indigo5};
  border-left: 1px solid ${colors.main.indigo5};
  border-radius: 0px 16px 16px 0px;

  ${({ isRightSelected }) =>
    isRightSelected
      ? css`
          color: ${colors.default.white};
          background: ${colors.main.indigo5};
        `
      : css`
          color: ${colors.main.indigo5};
          background: none;
        `}
`;

export default Pill;
