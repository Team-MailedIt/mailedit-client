import { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../../../constants/colors';
import SignInModal from '../../auth/SignInModal';

export default function Popup() {
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);

  const handleSignInBtnClick = () => {
    setIsSignInModalOpen(!isSignInModalOpen);
  };

  return (
    <Wrapper>
      <Text>메일 템플릿을 더 보고 싶다면?</Text>
      <TextWrapper>
        <Text>지금</Text>
        <Logo src="/images/mhome_default_popup_logo.png" alt="logo" />
        <Text>에 가입 혹은 로그인 해 보세요!</Text>
      </TextWrapper>
      <Button onClick={handleSignInBtnClick}>회원가입 / 로그인</Button>

      <SignInModal
        isSignInModalOpen={isSignInModalOpen}
        setIsSignInModalOpen={setIsSignInModalOpen}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 172px;
  padding-top: 36px;

  bottom: 0;
  left: 0;
  position: fixed;
  z-index: 2;

  background: #343a40;
  border-radius: 15px 15px 0px 0px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextWrapper = styled.div`
  margin-top: 4px;

  display: flex;
  align-items: center;
`;

const Text = styled.span`
  font-weight: 300;
  font-size: 14px;
  line-height: 140%;
  color: ${colors.gray.gray2};
`;

const Logo = styled.img`
  width: 89px;
  margin-left: 6px;
`;

const Button = styled.button`
  width: 147px;
  height: 34px;
  margin-top: 22px;

  font-weight: 500;
  font-size: 12px;

  color: ${colors.default.white};
  background: ${colors.main.indigo3};
  border-radius: 2px;
`;
