import ReactModal from 'react-modal';
import styled from 'styled-components';
import { ModalStyle } from '../commons/ModalStyle';
import HelpContainer from './HelpContainer';

const HelpModal = ({ setIsModalOpen, isModalOpen }) => {
  Modal.defaultStyles.overlay.backgroundColor = `rgba(0,0,0,0.5)`;

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={() => {
        setIsModalOpen(false);
      }}
      ariaHideApp={false}
      style={ModalStyle}
    >
      <HelpContainer setIsModalOpen={setIsModalOpen} />
    </Modal>
  );
};

const Modal = styled(ReactModal)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background: #ffffff;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  &:focus {
    outline: none;
  }
`;

export default HelpModal;
