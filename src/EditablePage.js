import { useState } from 'react';
import EditableBlock from './EditableBlock';
import uid from './utils/uid';
import fetchedData from './data.json';

const EditPage = () => {
  // const initialBlock = { id: uid(), html: '', tag: 'p', flag: 'false' };
  const [blocks, setBlocks] = useState(fetchedData);

  const updatePageHandler = (updatedBlock) => {
    const index = blocks.map((b) => b.id).indexOf(updatedBlock.id);
    const updatedBlocks = [...blocks];
    updatedBlocks[index] = {
      ...updatedBlocks[index],
      tag: updatedBlock.tag,
      html: updatedBlock.html,
      flag: updatedBlock.flag,
    };
    setBlocks(updatedBlocks);
  };

  const addBlockHandler = (currentBlock) => {
    const newBlock = { id: uid(), html: '', tag: 'p', flag: 'false' };
    const index = blocks.map((b) => b.id).indexOf(currentBlock.id);
    const updatedBlocks = [...blocks];
    updatedBlocks.splice(index + 1, 0, newBlock);
    setBlocks(updatedBlocks);
    // this.setState({ blocks: updatedBlocks }, () => {
    //   currentBlock.ref.nextElementSibling.focus();
    // });
  };

  const deleteBlockHandler = (currentBlock) => {
    const previousBlock = currentBlock.ref.previousElementSibling;
    if (previousBlock) {
      const index = blocks.map((b) => b.id).indexOf(currentBlock.id);
      const updatedBlocks = [...blocks];
      updatedBlocks.splice(index, 1);
      setBlocks(updatedBlocks);
      // this.setState({ blocks: updatedBlocks }, () => {
      //   setCaretToEnd(previousBlock);
      //   previousBlock.focus();
      // });
    }
  };

  const updateBlockHandler = (currentBlock) => {
    const { startPoint, endPoint } = currentBlock;
    const targetHtml = currentBlock.html;
    // 쪼개지는 범위에 따라 빈 string에 대한 핸들링 필요
    const prevHtml = targetHtml.substring(0, startPoint);
    const newHtml = targetHtml.substring(startPoint, endPoint);
    const nextHtml = targetHtml.substring(endPoint);
    const updatedBlocks = [...blocks];
    const index = blocks.map((b) => b.id).indexOf(currentBlock.id);

    if (prevHtml.length === 0 && nextHtml.length === 0) {
      updatedBlocks[index] = {
        ...updatedBlocks[index],
        flag: 'true',
      };
    } else if (prevHtml.length === 0 && nextHtml.length !== 0) {
      const updateBlock = { id: uid(), html: newHtml, tag: 'p', flag: 'true' };
      const newBlock = { id: uid(), html: nextHtml, tag: 'p', flag: 'false' };
      updatedBlocks.splice(index, 1, updateBlock);
      updatedBlocks.splice(index + 1, 0, newBlock);
    } else if (prevHtml.length !== 0 && nextHtml.length === 0) {
      const updateBlock = {
        id: uid(),
        html: prevHtml,
        tag: 'p',
        flag: 'false',
      };
      const newBlock = { id: uid(), html: newHtml, tag: 'p', flag: 'true' };
      updatedBlocks.splice(index, 1, updateBlock);
      updatedBlocks.splice(index + 1, 0, newBlock);
    } else if (prevHtml.length !== 0 && nextHtml.length !== 0) {
      const updateBlock = {
        id: uid(),
        html: prevHtml,
        tag: 'p',
        flag: 'false',
      };
      updatedBlocks.splice(index, 1, updateBlock);
      const newBlock = { id: uid(), html: newHtml, tag: 'p', flag: 'true' };
      updatedBlocks.splice(index + 1, 0, newBlock);
      const nextBlock = { id: uid(), html: nextHtml, tag: 'p', flag: 'false' };
      updatedBlocks.splice(index + 2, 0, nextBlock);
    }
    setBlocks(updatedBlocks);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '450px',
        minHeight: '580px',
        margin: '24px',
        paddingTop: '24px',
        border: '1px solid black',
        borderRadius: '2px',
        backgroundColor: '#F1F3F5',
      }}
    >
      {blocks.map((block) => {
        return (
          // EditableBlock argument로 받을 수 있는게 string이고,
          // boolean을 받는 속성이 따로 있음.
          // flag를 boolean type으로 굳이 할 수는 있는데 에러 나옴.
          <EditableBlock
            key={block.id}
            id={block.id}
            tag={block.tag}
            html={block.html}
            flag={block.flag}
            updatePage={updatePageHandler}
            addBlock={addBlockHandler}
            deleteBlock={deleteBlockHandler}
            updateBlock={updateBlockHandler}
          />
        );
      })}
    </div>
  );
};
export default EditPage;
