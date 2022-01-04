import styled from "styled-components";
import ReactModal from "react-modal";
import GoogleLogin from "react-google-login";

const SignInModal = ({ isModalOpen, setIsModalOpen }) => {
  const onSuccess = (res) => {
    console.log("onSucess: ", res);
    console.log("userProfile: ", res.profileObj);
    console.log("tokenObj: ", res.tokenObj);
  };

  const onFailure = (res) => {
    console.log("onFailure: ", res);
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={() => setIsModalOpen(false)}
      ariaHideApp={false}
    >
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_API_KEY}
        buttonText="구글로 계속하기"
        onSuccess={onSuccess}
        onFailure={onFailure}
      />
      <Input placeholder="이메일" />
      <Input placeholder="비밀번호" type="password" />
      <Input placeholder="비밀번호 확인" type="password" />
      <SubmitBtn>로그인 하기</SubmitBtn>
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

const Input = styled.input`
  width: 50%;
`;

const SubmitBtn = styled.button``;

export default SignInModal;
