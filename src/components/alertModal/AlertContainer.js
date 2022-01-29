import ReactModal from 'react-modal';
import styled from 'styled-components';

const AlertContainer = ({ isAlertOpen, setIsAlertOpen, ChildComponent }) => {
  return (
    <Modal
      isOpen={isAlertOpen}
      onRequestClose={() => {
        setIsAlertOpen(false);
      }}
      ariaHideApp={false}
      overlayClassName="Overlay"
    >
      <ChildComponent setIsAlertOpen={setIsAlertOpen} />
    </Modal>
  );
};

const Modal = styled(ReactModal)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 394px;
  height: 246px;
  background: #ffffff;
  border-radius: 4px;

  display: flex;
  justify-content: center;
`;
export default AlertContainer;
