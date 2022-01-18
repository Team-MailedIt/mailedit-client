import styled from "styled-components";
import ReactModal from "react-modal";

import logoBlue from "../../constants/icons/logoBlue.svg";

const SignInModal = ({ isModalOpen, setIsModalOpen, contents }) => {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={() => setIsModalOpen(false)}
      ariaHideApp={false}
    >
      <Wrapper>
        <Logo src={logoBlue} />
        <Text>처음 써 보는 메일, MailedIt에서 쉽게 시작해 보세요</Text>
        {contents}
      </Wrapper>
    </Modal>
  );
};

const Modal = styled(ReactModal)`
  width: 540px;

  background: #ffffff;
  border: 1px solid grey;
  border-radius: 10px;
`;

const Wrapper = styled.div`
  width: 360px;

  margin: 100px 90px 52px 90px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  width: 248px;
  height: 52px;
`;

const Text = styled.span`
  height: 22px;

  font-size: 18px;
  line-height: 22px;

  margin-top: 20px;
  margin-bottom: 84px;

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.01em;
`;

export default SignInModal;
