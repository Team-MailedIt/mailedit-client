import styled from 'styled-components';
import { Body, Heading } from './Components';

const HelpContainer = ({ setIsModalOpen }) => {
  const closeHelp = () => {
    setIsModalOpen(false);
  };

  return (
    <ColContainer>
      <RowContainer
        style={{
          marginLeft: '28px',
          marginRight: '20px',
          marginTop: '20px',
          justifyContent: 'space-between',
        }}
      >
        <RowContainer>
          <Heading style={{ marginRight: '20px' }}>
            에디터 페이지 사용법
          </Heading>
          <Body>사용법을 다시 보려면 하단의</Body>
          <HelpIcon src={`${process.env.PUBLIC_URL}/img/help_circle.svg`} />
          <Body>아이콘을 클릭하세요.</Body>
        </RowContainer>
        <ExitIcon
          src={`${process.env.PUBLIC_URL}/img/icon_exit.svg`}
          onClick={closeHelp}
        />
      </RowContainer>
      <RowContainer style={{ justifyContent: 'center', marginTop: '20px' }}>
        <HelpImg src="/img/help_img.png" />
      </RowContainer>
    </ColContainer>
  );
};
const ColContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1239px;
  height: 758px;
`;
const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: center; */
  align-items: center;
`;
const ExitIcon = styled.img`
  width: 27px;
  height: 27px;
  &:hover {
    cursor: pointer;
  }
`;
const HelpImg = styled.img`
  width: 1215px;
  height: 682px;
`;
const HelpIcon = styled.img`
  width: 22px;
  height: 22px;
  margin-left: 6px;
  margin-right: 6px;
`;

export default HelpContainer;
