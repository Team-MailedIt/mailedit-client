import { useState } from 'react';
import { Link } from 'react-router-dom';
import { VerticalLine } from '../components/workspace/Components';
import EditPage from '../components/workspace/EditablePage';
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
        gridTemplateColumns: '1fr 0.5px 1fr',
      }}
    >
      <TemplatePage getBlockFromTemplate={getBlockFromTemplate} />
      <VerticalLine />
      <EditorContainer />
      {/* <EditPage passedBlocks={blocks} /> */}
    </div>
  );
};

export default WorkSpace;
