import styled, { css } from 'styled-components';
import { colors } from '../../../constants/colors';

interface ILeft {
  isLeftSelected: boolean;
}

interface IRight {
  isRightSelected: boolean;
}

const MPill = ({ isLeftSelected, isRightSelected }: ILeft & IRight) => {
  return (
    <Wrapper>
      <Left isLeftSelected={isLeftSelected}>기본템플릿</Left>
      <Right isRightSelected={isRightSelected}>마이템플릿</Right>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 134px;
  height: 23px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Left = styled.div<ILeft>`
  width: 66px;
  height: 21px;
  padding-top: 3px;
  padding-left: 7px;

  font-weight: 600;
  font-size: 12px;

  color: ${colors.default.white};
  border: 1px solid ${colors.main.indigo5};
  border-radius: 12px 0px 0px 12px;

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

const Right = styled.div<IRight>`
  width: 66px;
  height: 21px;
  padding-top: 3px;
  padding-left: 5px;

  font-weight: 600;
  font-size: 12px;

  color: ${colors.main.indigo5};
  border: 1px solid ${colors.main.indigo5};
  border-radius: 0px 12px 12px 0px;

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

export default MPill;
