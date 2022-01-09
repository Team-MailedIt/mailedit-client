import styled from 'styled-components';
import COLORS from '../../constants/colors';

export const SignUp = styled.button`
  width: 119px;
  height: 43px;

  border: none;
  background: ${COLORS.UIWhite};
  border-radius: 4px;

  color: ${COLORS.primary};
  text-align: center;
  text-decoration: none;
  font-size: 16px;
`;

export const SpanLink = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: ${COLORS.UIWhite};
  display: flex;
  align-items: center;
`;

export const VerticalLine = styled.div`
  border-left: 1px solid ${COLORS.UIWhite};
  width: 0.5px;
  height: 18px;
`;
