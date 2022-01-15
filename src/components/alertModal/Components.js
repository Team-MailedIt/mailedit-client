import styled from 'styled-components';
import COLORS from '../../constants/colors';

export const Heading = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 27px;
  color: ${COLORS.primary};
`;
export const BodySpan = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 140%;
  color: ${COLORS.UIBlack};
`;
export const BodySpanBold = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 140%;

  color: ${COLORS.UIBlack};
`;
export const ConfirmButton = styled.button`
  width: 148px;
  height: 43px;

  border: none;
  background: ${COLORS.primary};
  border-radius: 4px;

  color: ${COLORS.UIWhite};
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
`;
