import styled from 'styled-components';
import COLORS from '../../constants/colors';

export const VerticalLine = styled.div`
  height: 100vh;

  display: flex;

  border-left: 0.5px solid ${COLORS.gray5};
`;

export const TemplateSaveButton = styled.button`
  border: 1px solid black;
`;
export const TemplateTitleInput = styled.input`
  height: 29px;

  font-style: normal;
  font-weight: 600;
  font-size: 24px;

  border: none;
  outline: none;
`;

export const TemplateMemoInputContainer = styled.div`
  display: flex;
  align-items: 'center';

  width: 400px;
  height: 29px;

  padding-left: 12px;

  background: ${COLORS.gray1};
  border: none;
  border-radius: 2px;
`;
export const TemplateMemoInput = styled.input`
  outline: none;
  border: none;

  background: ${COLORS.gray1};
`;
export const TemplateSelectGroupButton = styled.button`
  width: 86px;
  height: 22px;

  border: none;
  background: ${COLORS.indigo4};
  border-radius: 4px;

  color: ${COLORS.UIWhite};
  text-align: center;
  text-decoration: none;
  font-size: 12px;
`;
export const SubTitle = styled.span`
  display: flex;
  align-items: center;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;

  margin-left: 2px;
  margin-right: 24px;
`;
