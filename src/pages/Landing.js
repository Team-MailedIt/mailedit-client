import { useState } from "react";
import SignIn from "../components/signin/SignIn";
import SignInModal from "../components/signin/SignInModal";

const Landing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSignInBtnClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <SignInModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        contents={<SignIn />}
      ></SignInModal>
      <button onClick={handleSignInBtnClick}>로그인 버튼</button>
    </>
  );
};

export default Landing;
