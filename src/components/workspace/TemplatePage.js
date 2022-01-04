import { useState } from 'react';
import styled from 'styled-components';
import parsedData from '../../replaced.json';

const TemplatePage = ({ getBlockFromTemplate }) => {
  const [blocks, setBlocks] = useState(parsedData);

  const onClickHandler = (e) => {
    const { id } = e.target;
    getBlockFromTemplate(blocks[id]);
  };

  return (
    <Box>
      <h3>[00팀] 00/00 00프로젝트 회의 일정 공유</h3>
      {blocks.map(({ id, tag, html, flag }, index) => (
        <Block id={index} key={id} onClick={onClickHandler}>
          {html}
        </Block>
      ))}
    </Box>
  );
};

const Box = styled.div`
  width: 450px;
  min-height: 580px;
  margin: 24px;
  padding: 24px;
  padding-top: 24px;
  border: 1px solid black;
  border-radius: 2px;
  background: #ffffff;
`;
const Block = styled.div`
  margin: 10px;
  white-space: pre-wrap;
`;

export default TemplatePage;
