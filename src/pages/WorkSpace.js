import { useState } from 'react';
import { Link } from 'react-router-dom';
import EditPage from '../components/workspace/EditablePage';
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
    <div>
      <Link to={'/'}>
        <h1>go to landing</h1>
      </Link>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <TemplatePage getBlockFromTemplate={getBlockFromTemplate} />
        <EditPage passedBlocks={blocks} />
      </div>
    </div>
  );
};

export default WorkSpace;
