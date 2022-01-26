import { useState, useContext, useCallback } from 'react';
import styled from 'styled-components';
import COLORS from '../../constants/colors';
import { TemplateSaveButton, HorizontalLine, CopyButton } from './Components';
import EditPage from './EditablePage';
import HeaderContainer from './HeaderContainer';
import { CopyContext } from '../../contexts/CopyContexts';
import parseBlocks from '../../utils/parseBlocks';
import copy from 'copy-to-clipboard';
import ModalContainer from '../alertModal/ModalContainer';
import API from '../../utils/API';
import getOnlyBlocks from '../../utils/getOnlyBlocks';

const EditorContainer = ({ passedBlocks }) => {
  const [headerData, setHeaderData] = useState({});
  const { action, setActionHandler } = useContext(CopyContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalOption, setModalOption] = useState('');

  const handleHeaderData = useCallback((newValue) => {
    setHeaderData(newValue);
  }, []);

  // EditablePage에서 useContext로 복사하기를 하면 실행되는 함수.
  // block data를 가져와서 parsing하여 setState.
  const getBlocksHandler = (content) => {
    // we need to parse data
    if (action === 'copy') {
      const parsedString = parseBlocks(content, false);
      copy(parsedString, { format: 'text/plain' });
    } else if (action === 'save') {
      if (headerData.title === '') {
        window.alert('제목 입력은 필수입니다.');
      } else {
        // content에서 블럭인 것만 가져오기
        const filteredContents = getOnlyBlocks(content);
        const props = {
          title: headerData.title,
          subtitle: headerData.subtitle,
          groupId: headerData.group.id,
          content: filteredContents,
        };
        const res = saveTemplateToServer(props);
        if (res) {
          setModalOption('save');
          setIsModalOpen(true);
        }
      }
    }
    setActionHandler('');
  };

  const saveTemplateToServer = async (props) => {
    console.log(props);
    const { status } = await API.post(`/templates/my`, props);
    if (status === 200) return true;
    else if (status === 403) {
      window.alert('you need login');
      return false;
    } else return false;
  };

  const copyButtonHandler = () => {
    setActionHandler('copy');
    setModalOption('copy');
    setIsModalOpen(true);
  };

  // 마지막 save 버튼 눌렀을 경우
  const handleSaveTemplate = () => {
    // check template can be saved first
    setActionHandler('save');
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

      <ModalContainer
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        modalOption={modalOption}
      />
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  background: ${COLORS.UIWhite};
  border-left: 0.5px solid ${COLORS.gray5};
  padding-left: 40px;
  padding-right: 40px;
`;
const BodyContainer = styled.div`
  border: 1px solid black;
  height: 788px;
  // height 0.7vh 이런걸로 주면 반응형 ㄱㄴ
  max-width: 664px;
  background: ${COLORS.backgroundWhite};
  /* margin-left: 40px;
  margin-right: 40px; */
  padding-left: 26px;
  padding-right: 26px;
  border-radius: 2px;
`;
const FooterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  /* margin-right: 40px; */
  margin-top: 24px;
`;
export default EditorContainer;
