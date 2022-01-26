import styled from 'styled-components';
import ReactModal from 'react-modal';

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

  width: 328px;
  background: #ffffff;

  // looks
  background-color: #fff;
  padding: 1.125em 1.5em;
  font-size: 1.25em;
  border-radius: 12px;
  box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.3),
    0 0.0625rem 0.125rem rgba(0, 0, 0, 0.2);

  &::before {
    // layout
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    bottom: 100%;
    left: 1em; // offset should move with padding of parent
    border: 0.75rem solid transparent;
    border-top: none;

    // looks
    border-bottom-color: #fff;
    filter: drop-shadow(0 -0.0625rem 0.0625rem rgba(0, 0, 0, 0.1));
  }
`;
export default TooltipContainer;
