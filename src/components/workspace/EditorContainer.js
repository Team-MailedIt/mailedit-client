import styled from 'styled-components';
import COLORS from '../../constants/colors';
import { TemplateSaveButton } from './Components';
import EditPage from './EditablePage';
import HeaderContainer from './HeaderContainer';
const EditorContainer = () => {
  return (
    <Container>
      <HeaderContainer />
      <EditPage />
      <TemplateSaveButton>템플릿 저장하기</TemplateSaveButton>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${COLORS.backgroundWhite};
  margin-left: 40px;
  margin-right: 40px;
  border: 1px solid black;
`;
export default EditorContainer;
