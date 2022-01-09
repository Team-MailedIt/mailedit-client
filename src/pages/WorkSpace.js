import { useState } from 'react';
import Sidebar from '../components/commons/Sidebar';
import EditorContainer from '../components/workspace/EditorContainer';
import TemplatePage from '../components/workspace/TemplatePage';
import uid from '../utils/uid';

const WorkSpace = () => {
  // Template Page에서 가져온 block의 html을
  // EditPage 배열의 맨 마지막 element로 넣어줘야함
  const [blocks, setBlocks] = useState(null);

  const getBlockFromTemplate = (element) => {
    const newBlock = { ...element, id: uid() };
    // setBlock하기 전에 \n를 <div></div>로 수정해야됨,,,
    setBlocks(newBlock);
  };

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1.7fr 8.3fr',
      }}
    >
      <Sidebar />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, minmax(530px, auto))',
        }}
      >
        <TemplatePage getBlockFromTemplate={getBlockFromTemplate} />
        <EditorContainer passedBlocks={blocks} />
      </div>
    </div>
  );
};

export default WorkSpace;
