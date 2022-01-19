import { useCallback, useEffect, useState, useRef, useContext } from 'react';
import EditableBlock from './EditableBlock';
import uid from '../../utils/uid';

import styled from 'styled-components';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import setCaretToEnd from '../../utils/setCaretToEnd';
import { DragIcon } from '../../constants/icons';
import { CopyContext } from '../../contexts/CopyContexts';

const EditPage = ({ passedBlocks, getBlocksHandler }) => {
  const { action } = useContext(CopyContext);
  // const scrollRef = useRef([]);
  const initialBlock = {
    id: uid(),
    html: '',
    tag: 'p',
    flag: 0,
  };
  const [blocks, setBlocks] = useState([initialBlock]);
  const [currentBlockIndex, setCurrentBlockIndex] = useState(null);
  const [commandAction, setCommandAction] = useState(null);

  // function scrollToBottom(index) {
  //   const element = scrollRef.current.children[0].children[index - 1];
  //   element.scrollIntoView({
  //     block: 'end',
  //     behavior: 'smooth',
  //   });
  // }

  // copy block data
  useEffect(() => {
    if (action !== '') {
      getBlocksHandler(blocks);
    }
  }, [action, getBlocksHandler, blocks]);

  // 넘겨받은 block 배열 맨 뒤에 set
  useEffect(() => {
    if (passedBlocks) {
      if (passedBlocks.length > 0) {
        setBlocks((b) => [...b, ...passedBlocks]);
      } else {
        setBlocks((b) => [...b, passedBlocks]);
      }
    }
  }, [passedBlocks]);

  // useEffect(() => {
  //   scrollToBottom(blocks.length);
  // }, [blocks.length]);

  const focusNewBlock = useCallback(
    (prevBlock) => {
      const blockId = blocks[prevBlock + 1].id;
      const newBlock = document.querySelector(`.${blockId}`);
      if (newBlock) {
        newBlock.focus();
      }
    },
    [blocks]
  );
  const focusPrevBlock = useCallback(
    (nextBlock) => {
      const blockId = blocks[nextBlock - 1].id;
      const prevBlock = document.querySelector(`.${blockId}`);
      // we have to move last caret in that paragraph
      if (prevBlock) {
        setCaretToEnd(prevBlock);
      }
    },
    [blocks]
  );

  // block의 길이가 달라진다 === 블럭의 추가나 삭제가 이루어진다 === 다음 블럭이나 이전 블럭으로 focus가 필요하다
  useEffect(() => {
    if (commandAction === 'Enter') {
      // focus to new block
      focusNewBlock(currentBlockIndex);
    } else if (commandAction === 'Backspace') {
      // focus to previous block, if it exists
      if (currentBlockIndex !== 0) focusPrevBlock(currentBlockIndex);
    }
  }, [
    blocks.length,
    commandAction,
    currentBlockIndex,
    focusNewBlock,
    focusPrevBlock,
  ]);

  const updatePageHandler = (updatedBlock) => {
    setCommandAction(null);
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
    setCommandAction(currentBlock.command);
    let newBlock = {};
    if (currentBlock.passed) {
      newBlock = {
        id: uid(),
        html: currentBlock.html,
        tag: 'p',
        flag: 1,
      };
    } else {
      newBlock = { id: uid(), html: '', tag: 'p', flag: 0 };
    }
    const index = blocks.map((b) => b.id).indexOf(currentBlock.id);
    setCurrentBlockIndex(index);
    const updatedBlocks = [...blocks];
    updatedBlocks.splice(index + 1, 0, newBlock);
    setBlocks(updatedBlocks);
  };

  const deleteBlockHandler = (currentBlock) => {
    setCommandAction(currentBlock.command);
    const index = blocks.map((b) => b.id).indexOf(currentBlock.id);
    setCurrentBlockIndex(index);
    if (blocks.length > 1) {
      const updatedBlocks = [...blocks];
      updatedBlocks.splice(index, 1);
      setBlocks(updatedBlocks);
    }
  };

  const updateBlockHandler = (currentBlock) => {
    setCommandAction(null);
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
        flag: 1,
      };
    } else if (prevHtml.length === 0 && nextHtml.length !== 0) {
      const updateBlock = {
        id: uid(),
        html: newHtml,
        tag: 'p',
        flag: 1,
      };
      const newBlock = {
        id: uid(),
        html: nextHtml,
        tag: 'p',
        flag: 0,
      };
      updatedBlocks.splice(index, 1, updateBlock);
      updatedBlocks.splice(index + 1, 0, newBlock);
    } else if (prevHtml.length !== 0 && nextHtml.length === 0) {
      const updateBlock = {
        id: uid(),
        html: prevHtml,
        tag: 'p',
        flag: 0,
      };
      const newBlock = {
        id: uid(),
        html: newHtml,
        tag: 'p',
        flag: 1,
      };
      updatedBlocks.splice(index, 1, updateBlock);
      updatedBlocks.splice(index + 1, 0, newBlock);
    } else if (prevHtml.length !== 0 && nextHtml.length !== 0) {
      const updateBlock = {
        id: uid(),
        html: prevHtml,
        tag: 'p',
        flag: 0,
      };
      updatedBlocks.splice(index, 1, updateBlock);
      const newBlock = {
        id: uid(),
        html: newHtml,
        tag: 'p',
        flag: 1,
      };
      updatedBlocks.splice(index + 1, 0, newBlock);
      const nextBlock = {
        id: uid(),
        html: nextHtml,
        tag: 'p',
        flag: 0,
      };
      updatedBlocks.splice(index + 2, 0, nextBlock);
    }
    setBlocks(updatedBlocks);
  };

  // 드래그 앤 드랍 시 배열 내 순서 재배치
  const handleDndChange = (result) => {
    if (!result.destination) return;

    const items = [...blocks];
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setBlocks(items);
  };

  return (
    <DragDropContext onDragEnd={handleDndChange}>
      <Droppable droppableId="todosDroppable">
        {(provided) => (
          <Container>
            <Box {...provided.droppableProps} ref={provided.innerRef}>
              {blocks.map(({ id, tag, html, flag }, index) => (
                <Draggable key={id} draggableId={id} index={index}>
                  {(provided) => (
                    <Wrapper
                      ref={provided.innerRef}
                      {...provided.dragHandleProps}
                      {...provided.draggableProps}
                      key={id}
                    >
                      <DragBtn>
                        <DragIcon src="/img/drag.png" />
                      </DragBtn>
                      <EditableBlock
                        // ref={(elem) => (scrollRef.current[index] = elem)}
                        id={id}
                        tag={tag}
                        html={html}
                        flag={flag}
                        updatePage={updatePageHandler}
                        addBlock={addBlockHandler}
                        deleteBlock={deleteBlockHandler}
                        updateBlock={updateBlockHandler}
                      />
                    </Wrapper>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </Box>
          </Container>
        )}
      </Droppable>
    </DragDropContext>
  );
};

const Container = styled.div`
  /* padding-top: 24px; */
  height: 688px;
  /* height: 80%; */

  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

const Box = styled.div``;

const DragBtn = styled.div`
  margin-right: 14px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: ;
`;

export default EditPage;
