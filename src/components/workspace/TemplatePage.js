import { useEffect, useState } from 'react';
import styled from 'styled-components';
import fetchedData from '../../data.json';

const TemplatePage = ({ getBlockFromTemplate }) => {
  const [blocks, setBlocks] = useState(fetchedData);
  const [parsedBlocks, setParsedBlocks] = useState([]);

  useEffect(() => {
    const updatedBlocks = [...blocks];
    blocks.forEach((element, index) => {
      const temp = element.html.replace(/<div>/gi, '\n');
      const newString = temp.replace(/<\/div>/gi, '');
      updatedBlocks[index] = {
        ...updatedBlocks[index],
        html: newString,
      };
    });
    console.log(updatedBlocks);
    setParsedBlocks(updatedBlocks);
  }, [blocks]);

  const onClickHandler = (e) => {
    const { id } = e.target;
    getBlockFromTemplate(blocks[id]);
  };

  return (
    <Box>
      <h3>[00팀] 00/00 00프로젝트 회의 일정 공유</h3>
      {parsedBlocks.map(({ id, tag, html, flag }, index) => (
        <Block id={index} key={id} onClick={onClickHandler}>
          {html}
        </Block>
      ))}
    </Box>
  );
};

const Box = styled.div`
  width: 450px;
  height: 70vh;
  margin: 24px;
  padding-top: 24px;
  border: 1px solid black;
  border-radius: 2px;
  background: #ffffff;
`;
const Block = styled.div`
  margin: 10px;
  white-space: pre-wrap;

  padding: 6px;

  background: #dbe1f6;
  border: 1px solid #4c6ef5;

  font-size: 12px;
`;

export default TemplatePage;
