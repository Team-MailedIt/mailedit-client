import { useState, useContext } from 'react';
import styled from 'styled-components';
import COLORS from '../../constants/colors';
import { TemplateSaveButton, HorizontalLine, CopyButton } from './Components';
import EditPage from './EditablePage';
import HeaderContainer from './HeaderContainer';
import { CopyContext } from '../../contexts/CopyContexts';
import parseBlocks from '../../utils/parseBlocks';

const EditorContainer = ({ passedBlocks }) => {
  const [headerData, setHeaderData] = useState({});
  const { setActionHandler } = useContext(CopyContext);

  const handleHeaderData = (newValue) => {
    setHeaderData(newValue);
  };

  const getBlocksHandler = (data) => {
    // we need to parse data
    // <div> -> \n, delete -> </div>
    const parsedString = parseBlocks(data);
    // copy to clipboard

    console.log(parsedString);
  };

  const copyButtonHandler = () => {
    setActionHandler(true);
    window.alert('복사되었습니다!');
  };

  // 마지막 save 버튼 눌렀을 경우
  const handleSaveTemplate = () => {
    console.log(headerData);
  };

  return (
    <Container>
      <HeaderContainer handleHeaderData={handleHeaderData} />
      <BodyContainer>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <CopyButton onClick={copyButtonHandler}>복사하기</CopyButton>
        </div>
        <HorizontalLine style={{ marginBottom: '24px' }} />
        <EditPage
          passedBlocks={passedBlocks}
          getBlocksHandler={getBlocksHandler}
        />
      </BodyContainer>
      <FooterContainer>
        <TemplateSaveButton onClick={handleSaveTemplate}>
          템플릿 저장하기
        </TemplateSaveButton>
      </FooterContainer>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  background: ${COLORS.UIWhite};
  border-left: 0.5px solid ${COLORS.gray5};
`;
const BodyContainer = styled.div`
  border: 1px solid black;
  height: 788px;
  // height 0.7vh 이런걸로 주면 반응형 ㄱㄴ
  max-width: 664px;
  background: ${COLORS.backgroundWhite};
  margin-left: 40px;
  margin-right: 40px;
  padding-left: 26px;
  padding-right: 26px;
  border-radius: 2px;
`;
const FooterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 40px;
  margin-top: 24px;
`;
export default EditorContainer;
