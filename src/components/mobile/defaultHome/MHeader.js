import { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../../../constants/colors';
import SignInModal from '../../auth/SignInModal';
import SignUpModal from '../../auth/SignUpModal';

export default function MHeader() {
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  const handleSignUpBtnClick = () => {
    setIsSignUpModalOpen(!isSignUpModalOpen);
  };

  const handleSignInBtnClick = () => {
    setIsSignInModalOpen(!isSignInModalOpen);
  };

  return (
    <Wrapper>
      <Content>
        <Top>
          <Logo src="/images/mhome_logo.png" />
          <Option>
            <Text onClick={handleSignInBtnClick}>로그인</Text>
            <Border />
            <Text onClick={handleSignUpBtnClick}>회원가입</Text>
          </Option>
        </Top>
        <Title>
          자체 제작 <b style={{ color: colors.default.white }}>기본템플릿</b>
        </Title>
        <Subtitle>
          가장 자주 쓰는 실무 이메일을 위한 가이드,
          <br />
          기본템플릿을 사용해 보세요
        </Subtitle>
      </Content>

      <BackgroundImg src="/images/mhome_default_banner.png" alt="home banner" />
      <SignInModal
        isSignInModalOpen={isSignInModalOpen}
        setIsSignInModalOpen={setIsSignInModalOpen}
        setIsSignUpModalOpen={setIsSignUpModalOpen}
      />
      <SignUpModal
        isSignUpModalOpen={isSignUpModalOpen}
        setIsSignInModalOpen={setIsSignInModalOpen}
        setIsSignUpModalOpen={setIsSignUpModalOpen}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 204px;

  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  width: 360px;
  height: 140px;
  margin-top: 20px;

  position: absolute;
`;

const Top = styled.header`
  width: 360px;
  height: 26px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 132px;
`;

const Option = styled.div`
  width: 106px;
  height: 14px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Text = styled.span`
  font-weight: 300;
  font-size: 12px;

  cursor: pointer;
  color: ${colors.default.white};
`;

const Border = styled.div`
  width: 1px;
  height: 12px;

  background: ${colors.default.white};
`;

const Title = styled.div`
  margin-top: 40px;

  font-weight: 400;
  font-size: 24px;
  color: ${colors.default.white};
`;

const Subtitle = styled.div`
  margin-top: 12px;

  font-weight: 400;
  font-size: 13px;
  line-height: 140%;
  color: ${colors.default.white};
`;

const BackgroundImg = styled.img`
  width: 100%;
`;
