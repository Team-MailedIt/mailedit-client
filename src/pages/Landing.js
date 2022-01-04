import { useState } from "react";
import SignInModal from "../components/signin/SignInModal";

const Landing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSignInBtnClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <SignInModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <button onClick={handleSignInBtnClick}>로그인 버튼</button>
    </>
  );
};

export default Landing;
