import styled from "styled-components";
import COLORS from "../../constants/colors";

import ReactModal from "react-modal";

export const Modal = styled(ReactModal)`
  width: 540px;
  padding-bottom: 52px;

  background: ${COLORS.gray1};
  border-radius: 4px;

  &:focus {
    outline: none;
  }
`;

export const Wrapper = styled.div`
  width: 360px;

  margin: 32px 90px 0px 90px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Exit = styled.img`
  width: 32px;
  height: 32px;

  margin-top: 36px;
  margin-left: 472px;

  &:hover {
    cursor: pointer;
  }
`;

export const Input = styled.input`
  width: 344px;
  height: 44px;

  border: 1.5px solid ${COLORS.gray4};
  border-radius: 4px;

  margin-top: 12px;
  padding-left: 16px;

  background: none;
`;

export const SubmitBtn = styled.button`
  width: 360px;
  height: 43px;

  border: none;
  color: ${COLORS.UIWhite};

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-top: 12px;

  background: ${(props) => props.color};
  border-radius: 4px;
`;

export const UnderText = styled.span`
  height: 19px;
  font-size: 16px;
  line-height: 19px;

  margin-top: 64px;

  color: ${COLORS.UIBlack};
`;

export const Other = styled.div`
  width: 83px;
  height: 22px;

  margin-top: 12px;

  font-size: 18px;
  line-height: 22px;

  color: ${COLORS.indigo5};

  &:hover {
    cursor: pointer;
  }
`;

export const ErrorText = styled.div`
  width: 100%;
  height: 14px;

  margin-top: 8px;

  font-size: 12px;
  line-height: 14px;

  display: flex;

  color: ${COLORS.tagRed};
`;
