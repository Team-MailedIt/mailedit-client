import { useState } from "react";
import SignIn from "../components/signin/SignIn";
import SignInModal from "../components/signin/SignInModal";
import { Link } from 'react-router-dom';

const Landing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSignInBtnClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    
    <>
      <h1>I'm landing page</h1>
      <Link to={'/home'}>
        <span>go to home</span>
      </Link>
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
