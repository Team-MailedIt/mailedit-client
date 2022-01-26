import styled from 'styled-components';
import ReactModal from 'react-modal';
import COLORS from '../../constants/colors';

const TooltipContainer = ({
  isModalOpen,
  setIsModalOpen,
  positionTop,
  positionLeft,
}) => {
  ReactModal.defaultStyles.overlay.backgroundColor = `rgb(0, 0, 0, 0)`;

  // 취소 버튼
  const handleClose = () => {
    setIsModalOpen(false);
  };

  // 확인 버튼
  const handleConfirm = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={() => {
        setIsModalOpen(false);
      }}
      ariaHideApp={false}
      positionTop={positionTop}
      positionLeft={positionLeft}
    >
      <div>hi</div>
    </Modal>
  );
};

const Modal = styled(ReactModal)`
  position: absolute;
  top: ${(props) => props.positionTop};
  left: ${(props) => props.positionLeft};

  background: ${COLORS.gray7};

  padding: 1.125em 1.5em;
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
`;
export default TooltipContainer;
