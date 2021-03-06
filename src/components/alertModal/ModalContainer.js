import ReactModal from 'react-modal';
import styled from 'styled-components';
import CopyContents from './CopyContents';
import SaveContents from './SaveContents';
import { useNavigate } from 'react-router-dom';

const ModalContainer = ({ isModalOpen, setIsModalOpen, modalOption }) => {
  ReactModal.defaultStyles.overlay.backgroundColor = `rgba(0,0,0,0.5)`;
  const navigate = useNavigate();

  const handleOnClick = () => {
    setIsModalOpen(false);
    if (modalOption === 'save') {
      navigate('/home');
    }
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={() => {
        setIsModalOpen(false);
      }}
      ariaHideApp={false}
    >
      {modalOption === 'copy' ? (
        <CopyContents handleOnClick={handleOnClick} />
      ) : (
        <SaveContents handleOnClick={handleOnClick} />
      )}
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
  &:focus {
    outline: none;
  }
`;
export default ModalContainer;
