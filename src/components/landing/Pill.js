import styled, { css } from 'styled-components';
import COLORS from '../../constants/colors';

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

  font-weight: 600;
  font-size: 20px;
  line-height: 140%;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${COLORS.UIWhite};
  border: 2px solid ${COLORS.bodyBlue};
  border-right: 1px solid ${COLORS.bodyBlue};
  border-radius: 16px 0px 0px 16px;

  ${({ isLeftSelected }) =>
    isLeftSelected
      ? css`
          color: ${COLORS.UIWhite};
          background: ${COLORS.bodyBlue};
        `
      : css`
          color: ${COLORS.bodyBlue};
          background: none;
        `}
`;

const Right = styled.div`
  width: 114px;
  height: 31px;

  font-weight: 600;
  font-size: 20px;
  line-height: 140%;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${COLORS.bodyBlue};
  border: 2px solid ${COLORS.bodyBlue};
  border-left: 1px solid ${COLORS.bodyBlue};
  border-radius: 0px 16px 16px 0px;

  ${({ isRightSelected }) =>
    isRightSelected
      ? css`
          color: ${COLORS.UIWhite};
          background: ${COLORS.bodyBlue};
        `
      : css`
          color: ${COLORS.bodyBlue};
          background: none;
        `}
`;

export default Pill;
