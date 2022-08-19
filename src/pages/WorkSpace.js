import { useState } from 'react';
import EditorContainer from '../components/workspace/EditorContainer';
import TemplatePage from '../components/workspace/TemplatePage';
import uid from '../utils/uid';
import CopyContextProvider from '../contexts/CopyContexts';
import WorkSpaceSidebar from '../components/workspace/WorkSpaceSidebar';
import { GroupProvider } from '../contexts/GroupContexts';
import { PositionProvider } from '../contexts/ElementPositionContexts';
import styled from 'styled-components';

const WorkSpace = () => {
  // Template Page에서 가져온 block의 html을
  // EditPage 배열의 맨 마지막 element로 넣어줘야함
  const [blocks, setBlocks] = useState(null);

  const getBlockFromTemplate = (element) => {
    const newBlock = { ...element, id: uid() };
    // setBlock하기 전에 \n를 <div></div>로 수정해야됨,,,
    setBlocks(newBlock);
  };

  const getAllBlockFromTemplate = (elementArray) => {
    let NewArray = [];
    elementArray.forEach((element) => {
      NewArray = [...NewArray, { ...element, id: uid() }];
    });
    setBlocks(NewArray);
  };

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1.7fr 8.3fr',
      }}
    >
      <PositionProvider>
        <GroupProvider>
          <Wrapper>
            <WorkSpaceSidebar />
            <CopyContextProvider>
              <TemplatePage
                getBlockFromTemplate={getBlockFromTemplate}
                getAllBlockFromTemplate={getAllBlockFromTemplate}
              />
              <EditorContainer passedBlocks={blocks} />
            </CopyContextProvider>
          </Wrapper>
        </GroupProvider>
      </PositionProvider>
    </div>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  min-width: 1024px;

  display: grid;
  grid-template-columns: 1fr 3fr 3fr;
  grid-template-areas: 'sidebar preview editor';
`;

export default WorkSpace;
