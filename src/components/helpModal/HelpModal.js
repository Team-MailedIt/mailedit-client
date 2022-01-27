import ReactModal from 'react-modal';
import styled from 'styled-components';
import HelpContainer from './HelpContainer';

const HelpModal = ({ setIsModalOpen, isModalOpen }) => {
  ReactModal.defaultStyles.overlay.backgroundColor = `rgba(0,0,0,0.5)`;
  const handleOnClick = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={() => {
        setIsModalOpen(false);
      }}
      ariaHideApp={false}
    >
      <HelpContainer />
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
`;

export default HelpModal;
