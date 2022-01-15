import styled from 'styled-components';
import {
  BodyContainer,
  TitleSpan,
  TitleSpanBold,
  LeftPill,
  LeftPillSpan,
  RightPill,
  RightPillSpan,
  BodySpan,
  CreateTemplateButton,
} from './Components';
import { useNavigate } from 'react-router';

const BodyForth = () => {
  const navigate = useNavigate();

  const goToWorkSpace = () => {
    navigate('/workspace');
  };
  return (
    <BodyContainer>
      <PillContainer style={{ marginTop: '112px' }}>
        <LeftPill>
          <LeftPillSpan>기본템플릿</LeftPillSpan>
        </LeftPill>
        <RightPill>
          <RightPillSpan>마이템플릿</RightPillSpan>
        </RightPill>
      </PillContainer>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          marginTop: '86px',
          width: '72vw',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ width: '687px', height: '450px' }}>
          <SecondGif src="./img/secondGif.gif" />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <TitleSpanBold>블록</TitleSpanBold>
            <TitleSpan>으로 쉽게 만드는</TitleSpan>
          </div>
          <TitleSpan>나만의 템플릿</TitleSpan>

          <BodySpan style={{ marginTop: '24px' }}>
            메일의 구조를 반영한 블록을 활용해
          </BodySpan>
          <BodySpan>보다 쉽게 나만의 템플릿을 만들어 보세요</BodySpan>
          <CreateTemplateButton
            onClick={goToWorkSpace}
            style={{ marginTop: '40px' }}
          >
            템플릿 만들러 가기
          </CreateTemplateButton>
        </div>
      </div>
    </BodyContainer>
  );
};
const SecondGif = styled.img`
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-position: center;
  width: 687px;
  height: 450px;
`;

const PillContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
export default BodyForth;
