import styled from "styled-components";
import ReactModal from "react-modal";

const SignInModal = ({ isModalOpen, setIsModalOpen, contents }) => {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={() => setIsModalOpen(false)}
      ariaHideApp={false}
    >
      {contents}
    </Modal>
  );
};

const Modal = styled(ReactModal)`
  width: 400px;
  height: 600px;
  background: #ffffff;
  border: 1px solid grey;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default SignInModal;
