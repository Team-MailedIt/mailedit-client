import styled from 'styled-components';
import COLORS from '../../constants/colors';

export const VerticalLine = styled.div`
  height: 100vh;
  border-left: 0.5px solid ${COLORS.gray5};
`;
export const HorizontalLine = styled.div`
  width: 100%;
  border-top: 0.5px solid ${COLORS.gray5};
`;
export const TemplateTitle = styled.span`
  font-style: normal;
  font-size: 24px;
  font-weight: bold;
`;
export const CopyButton = styled.span`
  margin-top: 20px;
  margin-bottom: 14px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  text-decoration-line: underline;
  &:hover {
    cursor: pointer;
  }
`;
export const TemplateSubTitle = styled.span`
  font-style: normal;
  font-size: 18px;
  font-weight: normal;
  align-self: center;
`;

export const TemplateSaveButton = styled.button`
  width: 173px;
  height: 40px;

  border: none;
  background: ${COLORS.primary};
  border-radius: 4px;

  color: ${COLORS.UIWhite};
  text-align: center;
  text-decoration: none;
  font-size: 14px;
`;
export const TemplateTitleInput = styled.input`
  height: 29px;
  width: 470px;

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
export const TemplateSelectButton = styled.button`
  width: 88px;
  height: 33px;

  border: none;
  background: ${COLORS.gray7};
  border-radius: 4px;

  color: ${COLORS.UIWhite};
  text-align: center;
  text-decoration: none;
  font-size: 14px;
`;
export const SubTitle = styled.span`
  display: flex;
  align-items: center;

  font-weight: 400;
  font-size: 16px;

  margin-left: 2px;
  margin-right: 24px;
`;
