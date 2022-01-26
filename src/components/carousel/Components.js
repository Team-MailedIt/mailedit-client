import styled from 'styled-components';
import COLORS from '../../constants/colors';

export const Title = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  color: ${COLORS.UIWhite};
`;

export const Body = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 160%;
  display: flex;
  align-items: center;
  color: ${COLORS.UIWhite};
`;
export const Button = styled.button`
  width: 50px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: ${COLORS.gray5};
  border-radius: 2px;

  // font
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 12px;
  color: ${COLORS.gray8};

  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: ${COLORS.indigo4};
    color: #fff;
  }
`;
