import styled from 'styled-components';
import COLORS from '../../constants/colors';
import { TemplateSaveButton, HorizontalLine, CopyButton } from './Components';
import EditPage from './EditablePage';
import HeaderContainer from './HeaderContainer';

const EditorContainer = ({ passedBlocks }) => {
  return (
    <Container>
      <HeaderContainer />
      <BodyContainer>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <CopyButton>복사하기</CopyButton>
        </div>
        <HorizontalLine />
        <EditPage passedBlocks={passedBlocks} />
      </BodyContainer>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginRight: '40px',
          marginTop: '20px',
        }}
      >
        <TemplateSaveButton>템플릿 저장하기</TemplateSaveButton>
      </div>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${COLORS.UIWhite};
  border-left: 0.5px solid ${COLORS.gray5};
`;
const BodyContainer = styled.div`
  border: none;
  height: 73vh;
  background: ${COLORS.backgroundWhite};
  margin-left: 40px;
  margin-right: 40px;
  padding-left: 26px;
  padding-right: 26px;
  border-radius: 2px;
`;
export default EditorContainer;
