import { useState, useContext, useCallback } from 'react';
import styled from 'styled-components';
import COLORS, { colors } from '../../constants/colors';
import EditPage from './EditablePage';
import HeaderContainer from './HeaderContainer';
import { CopyContext } from '../../contexts/CopyContexts';
import parseBlocks from '../../utils/parseBlocks';
import copy from 'copy-to-clipboard';
import ModalContainer from '../alertModal/ModalContainer';
import API from '../../utils/API';
import getOnlyBlocks from '../../utils/getOnlyBlocks';
import AlertContainer from '../alertModal/AlertContainer';
import { AuthContext } from '../../contexts/AuthContext';

const EditorContainer = ({ passedBlocks }) => {
  const { isLogin } = useContext(AuthContext);
  const [headerData, setHeaderData] = useState({});
  const { action, setActionHandler } = useContext(CopyContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalOption, setModalOption] = useState('');

  // alert when invalid
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [isBlockAlertOpen, setIsBlockAlertOpen] = useState(false);
  const [isRegisteredOpen, setIsRegisteredOpen] = useState(false);

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
        // 제목입력은 필수임
        setIsAlertOpen(true);
      } else {
        // content에서 블럭인 것만 가져오기
        const filteredContents = getOnlyBlocks(content);
        if (filteredContents.length === 0) {
          // 저장할 블럭이 없음
          setIsBlockAlertOpen(true);
        } else if (!isLogin) {
          setIsRegisteredOpen(true);
        } else {
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
    }
    setActionHandler('');
  };

  const saveTemplateToServer = async (props) => {
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
    <Wrapper>
      <HeaderContainer handleHeaderData={handleHeaderData} />
      <EditorBox>
        <Top>
          <CopyBtn onClick={copyButtonHandler}>복사하기</CopyBtn>
          <Border />
        </Top>
        <EditPage
          passedBlocks={passedBlocks}
          getBlocksHandler={getBlocksHandler}
        />
      </EditorBox>
      <Bottom>
        <TemplateSaveButton onClick={handleSaveTemplate}>
          템플릿 저장하기
        </TemplateSaveButton>
      </Bottom>

      <ModalContainer
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        modalOption={modalOption}
      />
      <AlertContainer
        isAlertOpen={isAlertOpen}
        setIsAlertOpen={setIsAlertOpen}
        text1="템플릿 제목은 필수입니다."
        text2="제목을 입력해 주세요."
      />
      <AlertContainer
        isAlertOpen={isBlockAlertOpen}
        setIsAlertOpen={setIsBlockAlertOpen}
        text1="저장할 블록이 없습니다."
        text2="1개 이상의 블록을 만들어 주세요."
      />
      <AlertContainer
        isAlertOpen={isRegisteredOpen}
        setIsAlertOpen={setIsRegisteredOpen}
        text1="아직 회원이 아니신가요?"
        text2="가입하여 더 많은 서비스를 이용해 보세요."
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${COLORS.UIWhite};

  padding-left: 40px;
  padding-right: 40px;

  @media screen and (min-width: 1500px) {
    padding-right: 8%;
  }
`;

const EditorBox = styled.div`
  width: 100%;
  height: 73vh;
  /* height: 661px; */
  margin-top: 12px;
  padding: 0 4%;

  background: ${colors.bg.bg};
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const CopyBtn = styled.span`
  margin: 20px 1% 14px 0;
  display: flex;
  align-items: center;

  font-weight: 400;
  font-size: 11px;
  color: ${colors.gray.gray7};
  text-decoration-line: underline;

  cursor: pointer;
`;

const Border = styled.div`
  width: 100%;
  height: 1px;
  margin-bottom: 10px;
  background: ${colors.gray.gray4};
`;

const Bottom = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
`;

const TemplateSaveButton = styled.button`
  width: 130px;
  height: 30px;

  border: none;
  background: ${COLORS.primary};
  border-radius: 3px;

  color: ${COLORS.UIWhite};
  text-align: center;
  text-decoration: none;
  font-size: 12px;
  font-weight: 400;
`;

export default EditorContainer;
