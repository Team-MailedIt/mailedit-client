import styled from 'styled-components';
import COLORS from '../../constants/colors';

export const ColContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Heading = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: ${COLORS.UIBlack};
  display: flex;
  align-items: center;
`;

export const SubHeading = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: ${COLORS.gray8};
  display: flex;
  align-items: center;
`;

export const AddNewGroupSpan = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: ${COLORS.gray6};
  display: flex;
  align-items: center;
`;

export const CancleButton = styled.button`
  width: 42px;
  height: 20px;
  background: ${COLORS.gray4};
  border: none;
  border-radius: 2px;

  color: ${COLORS.UIWhite};
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 12px;
`;
export const ConfirmButton = styled.button`
  width: 42px;
  height: 20px;
  background: ${COLORS.primary};
  border: none;
  border-radius: 2px;

  color: ${COLORS.UIWhite};
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 12px;
`;
