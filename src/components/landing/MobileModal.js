import { useState } from "react";
import styled from "styled-components";
import COLORS from "../../constants/colors";
import minilogo from "../../constants/icons/minilogo.svg";

const MobileModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleBtnClick = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen && (
        <Overlay>
          <ModalWrapper>
            <Modal>
              <Wrapper>
                <RowWrapper>
                  <Logo src={minilogo} />
                  <RowText>은 데스크탑에 최적화되어 있습니다.</RowText>
                </RowWrapper>
                <RowText>PC에서 확인해 주세요.</RowText>
                <Button onClick={handleBtnClick}>확인</Button>
              </Wrapper>
            </Modal>
          </ModalWrapper>
        </Overlay>
      )}
    </>
  );
};

const Overlay = styled.div`
  width: 100%;
  height: 100%;

  top: 0;
  left: 0;
  position: fixed;
  z-index: 2;

  background: rgba(0, 0, 0, 0.65);

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const ModalWrapper = styled.div`
  width: 100vw;
  height: 90vh;
  z-index: 3;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Modal = styled.div`
  width: 310px;
  height: 145px;

  display: flex;
  justify-content: center;
  z-index: 3;

  background: ${COLORS.UIWhite};
  border-radius: 4px;

  &:focus {
    outline: none;
  }
`;

const Wrapper = styled.div`
  width: 246px;
  height: 93px;

  margin-top: 34px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const RowWrapper = styled.div`
  width: 246px;
  height: 17px;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

const RowText = styled.div`
  height: 17px;
  font-size: 12px;

  margin-top: 4px;
`;

const Logo = styled.img`
  width: 78px;
  height: 13px;
`;

const Button = styled.button`
  width: 100px;
  height: 29px;

  margin-top: 26px;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 11px;
  color: ${COLORS.UIWhite};
  background: ${COLORS.primary};
  border: none;
  border-radius: 2px;
`;

export default MobileModal;
