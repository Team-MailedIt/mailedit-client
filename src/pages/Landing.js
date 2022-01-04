import { useState } from "react";
import SignIn from "../components/signin/SignIn";

const Landing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSignInBtnClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <SignIn isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <button onClick={handleSignInBtnClick}>로그인 버튼</button>
    </>
  );
};

export default Landing;
