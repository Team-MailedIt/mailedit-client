import styled from 'styled-components';
import COLORS from '../../constants/colors';

export const Heading = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 140%;

  color: ${COLORS.primary};
`;

export const Body = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 140%;

  color: ${COLORS.UIBlack};
`;
