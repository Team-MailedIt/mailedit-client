import styled from 'styled-components';
import ReactModal from 'react-modal';
import COLORS from '../../constants/colors';
import { useContext } from 'react';
import { ElementPositionContext } from '../../contexts/ElementPositionContexts';

const TooltipContainer = ({
  isModalOpen,
  setIsModalOpen,
  ChildComponent,
  positionX,
  positionY,
}) => {
  ReactModal.defaultStyles.overlay.backgroundColor = `rgb(0, 0, 0, 0)`;

  // 확인 버튼
  const handleConfirm = () => {
    setIsModalOpen(false);
  };

  // modal 위치
  const { position } = useContext(ElementPositionContext);

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={() => {
        setIsModalOpen(false);
      }}
      ariaHideApp={false}
      positionTop={position.y - 22 + positionX}
      positionLeft={position.x - positionY}
    >
      <ChildComponent handleConfirm={handleConfirm} />
    </Modal>
  );
};

const Modal = styled(ReactModal)`
  position: absolute;
  top: ${(props) => props.positionTop}px;
  left: ${(props) => props.positionLeft}px;
  transform: translate(-108%, 0%);

  background: ${COLORS.gray7};

  padding: 20px 20px;
  font-size: 1.25em;

  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 4px;

  &::before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: auto;
    right: -22px;

    border: 0.75rem solid transparent;
    border-left-color: ${COLORS.gray7};
  }
  &:focus {
    outline: none;
  }
`;
export default TooltipContainer;
