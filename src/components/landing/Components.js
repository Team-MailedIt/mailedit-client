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

  @media screen and (max-width: 1440px) {
    font-size: 12px;
    width: 90px;
    height: 30px;
  }
`;

export const SpanLink = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: ${COLORS.UIWhite};
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 1440px) {
    font-size: 12px;
  }
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
  @media screen and (max-width: 1440px) {
    font-size: 36px;
  }
`;

export const MainSubHeading = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 140%;
  color: ${COLORS.UIBlack};
  display: flex;
  align-items: center;
  @media screen and (max-width: 1440px) {
    font-size: 16px;
  }
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
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 1440px) {
    width: 196px;
    height: 43px;
    font-size: 16px;
  }
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${COLORS.backgroundWhite};

  /* justify-content: center; */
  align-items: center;

  width: 100vw;
  height: 720px;
  @media screen and (max-width: 1440px) {
    height: 580px;
  }
`;
export const PillContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 72px;
  @media screen and (max-width: 1440px) {
    margin-top: 60px;
  }
`;

export const LeftPill = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 20px;

  width: 144px;
  height: 42px;

  background: ${COLORS.bodyBlue};
  border: 2px solid ${COLORS.bodyBlue};
  border-radius: 20px 0px 0px 20px;

  @media screen and (max-width: 1440px) {
    width: 116px;
    height: 33px;
  }
`;

export const RightPill = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 20px;

  width: 144px;
  height: 42px;

  border: 2px solid ${COLORS.bodyBlue};
  border-radius: 0px 20px 20px 0px;
  @media screen and (max-width: 1440px) {
    width: 116px;
    height: 33px;
  }
`;

export const LeftPillSpan = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 140%;
  color: ${COLORS.UIWhite};
  display: flex;
  align-items: center;
  @media screen and (max-width: 1440px) {
    font-size: 20px;
  }
`;

export const RightPillSpan = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 140%;
  color: ${COLORS.UIBlack};
  display: flex;
  align-items: center;
  @media screen and (max-width: 1440px) {
    font-size: 20px;
  }
`;

export const TitleSpan = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 52px;
  line-height: 140%;
  color: ${COLORS.UIBlack};
  display: flex;
  align-items: center;

  @media screen and (max-width: 1440px) {
    font-size: 42px;
  }
`;
export const TitleSpanBold = styled.span`
  font-style: normal;
  font-weight: 900;
  font-size: 52px;
  line-height: 140%;
  color: ${COLORS.UIBlack};
  display: flex;
  align-items: center;
  @media screen and (max-width: 1440px) {
    font-size: 42px;
  }
`;
export const BodySpan = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 140%;
  color: ${COLORS.gray8};
  display: flex;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media screen and (max-width: 1440px) {
    font-size: 22px;
  }
`;
export const CreateTemplateButton = styled.button`
  width: 228px;
  height: 48px;

  border: none;
  background: ${COLORS.blockBorder};
  border-radius: 4px;

  color: ${COLORS.UIWhite};
  text-align: center;
  text-decoration: none;
  font-size: 20px;
  @media screen and (max-width: 1440px) {
    width: 183px;
    height: 39px;
    font-size: 16px;
  }
`;
export const FooterBodySpan = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  color: ${COLORS.UIWhite};
  display: flex;
  align-items: center;
  @media screen and (max-width: 1440px) {
    font-size: 16px;
  }
`;

export const FooterBodySpanButton = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  color: ${COLORS.UIWhite};
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 1440px) {
    font-size: 16px;
  }
`;
