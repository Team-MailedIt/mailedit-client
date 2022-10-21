import styled from 'styled-components';
import COLORS from '../../constants/colors';

import ReactModal from 'react-modal';

export const Modal = styled(ReactModal)`
  width: 404px;
  height: 509px;

  background: ${COLORS.gray1};
  border-radius: 4px;

  &:focus {
    outline: none;
  }

  @media screen and (max-width: 768px) {
    width: 344px;
    height: 491px;
  }
`;

export const Wrapper = styled.div`
  width: 278px;
  margin-left: 66px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    margin-left: 36px;
  }
`;

export const Exit = styled.img`
  width: 24px;
  height: 24px;

  margin-top: 28px;
  margin-left: 352px;

  cursor: pointer;

  @media screen and (max-width: 768px) {
    margin-top: 24px;
    margin-left: 300px;
  }
`;

export const Logo = styled.img`
  width: 186px;
  height: 39px;
`;

export const Text = styled.span`
  height: 22px;

  font-weight: 300;
  font-size: 14px;
  letter-spacing: -0.01em;

  margin-top: 10px;
  margin-bottom: 16px;
`;

// export const Input = styled.input`
//   width: 344px;
//   height: 44px;

//   border: 1.5px solid ${COLORS.gray4};
//   border-radius: 4px;

//   margin-top: 12px;
//   padding-left: 16px;

//   background: none;
// `;

// export const SubmitBtn = styled.button`
//   width: 360px;
//   height: 43px;

//   border: none;
//   color: ${COLORS.UIWhite};

//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;

//   margin-top: 12px;

//   background: ${(props) => props.color};
//   border-radius: 4px;
// `;

export const Illust = styled.img`
  width: 246px;
  margin-bottom: 29px;

  @media screen and (min-width: 768px) {
    width: 220px;
    margin-bottom: 40px;
  }
`;

export const UnderText = styled.span`
  font-weight: 400;
  font-size: 12px;

  margin-top: 36px;

  color: ${COLORS.UIBlack};
`;

export const Other = styled.span`
  margin-top: 8px;

  font-weight: 400;
  font-size: 13px;

  color: ${COLORS.indigo5};

  cursor: pointer;
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
