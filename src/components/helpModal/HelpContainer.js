import styled from 'styled-components';
import { Body, Heading } from './Components';
import icon_exit from '../../constants/icons/icon_exit.svg';
// import help_img from '../../constants/icons/help_img.svg';
import help_icon from '../../constants/icons/help_circle.svg';
import { colors } from '../../constants/colors';

const HelpContainer = ({ setIsModalOpen }) => {
  const closeHelp = () => {
    setIsModalOpen(false);
  };

  return (
    // <ColContainer>
    //   <RowContainer
    //     style={{
    //       marginLeft: '28px',
    //       marginRight: '20px',
    //       marginTop: '20px',
    //       justifyContent: 'space-between',
    //     }}
    //   >
    //     <RowContainer>
    //       <Heading style={{ marginRight: '20px' }}>
    //         에디터 페이지 사용법
    //       </Heading>
    //       <Body>사용법을 다시 보려면 사이드바 하단의</Body>
    //       <HelpIcon src={help_icon} />
    //       <Body>아이콘을 클릭하세요.</Body>
    //     </RowContainer>
    //     <ExitIcon src={icon_exit} onClick={closeHelp} />
    //   </RowContainer>
    //   <RowContainer style={{ justifyContent: 'center', marginTop: '20px' }}>
    //     <HelpImg src="/img/help_img.png" />
    //   </RowContainer>
    // </ColContainer>

    <Wrapper>
      <Top>
        <Title>에디터 페이지 사용법</Title>
        <SpanWrapper>
          <Span>사용법을 다시 보려면 사이드바 하단의</Span>
          <Icon src={help_icon} />
          <Span>아이콘을 클릭하세요.</Span>
        </SpanWrapper>
        <Exit src={icon_exit} onClick={closeHelp} />
      </Top>
      <HelpImg src="/img/help_img.png" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 1040px;
  height: 635px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Top = styled.div`
  width: 998px;
  height: 25px;
  margin-top: 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.span`
  font-weight: 600;
  font-size: 16px;
  color: ${colors.main.main};
`;

const SpanWrapper = styled.div`
  width: 820px;

  display: flex;
  align-items: center;
`;

const Span = styled.span`
  font-weight: 400;
  font-size: 12px;
  color: ${colors.default.black};
`;

const Icon = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 3px;
  margin-left: 7px;
`;

const Exit = styled.img`
  width: 22px;
  height: 22px;
  cursor: pointer;
`;

const HelpImg = styled.img`
  width: 1020px;
  height: 572px;
  margin-top: 13px;
`;

// ========================================

const ColContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1040px;
  height: 635px;
`;
const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: center; */
  align-items: center;
`;

const HelpIcon = styled.img`
  width: 22px;
  height: 22px;
  margin-left: 6px;
  margin-right: 6px;
`;

export default HelpContainer;
