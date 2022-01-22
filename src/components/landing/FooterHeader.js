import styled from 'styled-components';
import COLORS from '../../constants/colors';
import { useNavigate } from 'react-router';

const FooterHeader = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/home');
  };
  return (
    <>
      <FooterImgBackgroundDiv src="./img/footerImg.png">
        <RowContainer style={{ marginTop: '132px' }}>
          <FooterTitle style={{ marginRight: '20px' }}>
            메일 작성이 어려울 때는?
          </FooterTitle>
          <FooterLogoTitle src="./img/footertitlelogo.png" />
        </RowContainer>
        <div style={{ marginTop: '36px' }}>
          <FooterBody1>실무 이메일 작성이 나에게 매번 어려웠다면?</FooterBody1>
          <RowContainer style={{ alignItems: 'center' }}>
            <FooterBody2 style={{ marginRight: '16px' }}>지금 바로</FooterBody2>
            <FooterLogoBody src="./img/footerbodylogo.png" />
            <FooterBody2 style={{ marginLeft: '4px' }}>
              을 이용해 보세요
            </FooterBody2>
          </RowContainer>
        </div>
        <div style={{ marginTop: '86px' }}>
          <FooterButton onClick={goToHome}>지금 시작하기</FooterButton>
        </div>
      </FooterImgBackgroundDiv>
    </>
  );
};

export const FooterButton = styled.button`
  width: 362px;
  height: 75px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  border: none;
  background: ${COLORS.UIWhite};
  border-radius: 4px;

  color: ${COLORS.primary};
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 34px;
  /* identical to box height */

  display: flex;
  align-items: center;
  text-align: center;
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const FooterTitle = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 54px;
  line-height: 160%;
  color: ${COLORS.UIWhite};

  text-align: center;
`;
const FooterBody1 = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 160%;
  color: ${COLORS.UIWhite};

  text-align: center;
`;
const FooterBody2 = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 160%;
  color: ${COLORS.UIWhite};

  text-align: center;
`;
const FooterLogoTitle = styled.img`
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-position: center;
  width: 321px;
  height: 86px;
`;
const FooterLogoBody = styled.img`
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-position: center;
  width: 170px;
  height: 48px;
`;

const FooterImgBackgroundDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-position: center;
  width: 1920px;
  height: 680px;
`;
export default FooterHeader;
