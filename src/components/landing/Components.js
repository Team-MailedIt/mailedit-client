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

export const MainHeading = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 44px;
  line-height: 140%;
  color: ${COLORS.UIBlack};
  display: flex;
  align-items: center;
`;

export const MainSubHeading = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 140%;
  color: ${COLORS.UIBlack};
  display: flex;
  align-items: center;
`;

export const LookAroundButton = styled.button`
  width: 246px;
  height: 52px;

  border: none;
  background: ${COLORS.primary};
  border-radius: 4px;

  color: ${COLORS.UIWhite};
  text-align: center;
  text-decoration: none;
  font-size: 20px;
`;
