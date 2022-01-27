import styled from 'styled-components';
import { Body, Heading } from './Components';
import icon_exit from '../../constants/icons/icon_exit.svg';
import help_img from '../../constants/icons/help_img.svg';
const HelpContainer = () => {
  const closeHelp = () => {
    console.log('close!');
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
          <Body>사용법을 다시 보려면!</Body>
        </RowContainer>
        <ExitIcon src={icon_exit} onClick={closeHelp} />
      </RowContainer>
      <RowContainer style={{ justifyContent: 'center', marginTop: '20px' }}>
        <HelpImg src={help_img} />
        {/* <HelpImage src="/img/help_img.png" /> */}
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
const HelpImage = styled.img`
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-position: center;
  width: 1215px;
  height: 682px;
`;

export default HelpContainer;
