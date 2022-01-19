import { useEffect, useState } from 'react';
import styled from 'styled-components';
import COLORS from '../../constants/colors';
// import fetchedData from '../../data.json';
import {
  TemplateSubTitle,
  TemplateTitle,
  TemplateSelectButton,
} from './Components';
import { PrevIcon } from '../../constants/icons';
import { useNavigate } from 'react-router';

const TemplatePage = ({
  fetchedData,
  getBlockFromTemplate,
  getAllBlockFromTemplate,
}) => {
  // setBlock used when user select template from sidebar
  const [blocks, setBlocks] = useState([]);
  const [parsedBlocks, setParsedBlocks] = useState([]);

  // navigate to main page
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/home');
  };

  // data fetched from sidebar
  useEffect(() => {
    if (fetchedData) {
      setBlocks(fetchedData.content);
    }
  }, [fetchedData]);

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
    setParsedBlocks(updatedBlocks);
  }, [blocks]);

  const onClickHandler = (e) => {
    const { id } = e.target;
    getBlockFromTemplate(blocks[id]);
  };
  const handleAllTemplate = () => {
    getAllBlockFromTemplate(blocks);
  };

  return (
    <>
      <div>
        <RowContainer style={{ marginTop: '42px', marginLeft: '36px' }}>
          <PrevIcon
            onClick={goToMain}
            src="img/prevIcon.png"
            width="32px"
            height="32px"
          />
        </RowContainer>
        <div style={{ marginLeft: '40px', marginRight: '40px' }}>
          {fetchedData ? (
            <Container style={{ marginTop: '24px' }}>
              <RowContainer>
                <TemplateTitle>{fetchedData.title}</TemplateTitle>
              </RowContainer>
              <RowContainer style={{ justifyContent: 'space-between' }}>
                <TemplateSubTitle>{fetchedData.subtitle}</TemplateSubTitle>
                <TemplateSelectButton onClick={handleAllTemplate}>
                  템플릿 쓰기
                </TemplateSelectButton>
              </RowContainer>
            </Container>
          ) : (
            <Container style={{ paddingTop: '237px', alignItems: 'center' }}>
              <Illust src="/img/editorIllust.png" />
              <Span>템플릿을 조합해서 사용해 보세요!</Span>
            </Container>
          )}
          <Container style={{ marginTop: '20px' }}>
            {parsedBlocks.map(({ id, html }, index) => (
              <Block id={index} key={id} onClick={onClickHandler}>
                {html}
              </Block>
            ))}
          </Container>
        </div>
      </div>
    </>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 24px;
  padding-right: 24px;
`;
const RowContainer = styled.div`
  display: flex;
  flex-direction: 'row';
  align-items: 'center';
  margin-bottom: 8px;
`;
const Block = styled.div`
  white-space: pre-wrap;
  border: 1px solid ${COLORS.blockBorder};
  background: ${COLORS.blockBackground};
  border-radius: 2px;
  margin-top: 8px;
  margin-bottom: 8px;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 12px;
  line-height: 24px;
  font-size: 16px;
`;
export const Illust = styled.img`
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-position: center;
  width: 396px;
  height: 297px;
`;
export const Span = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  margin-top: 28px;

  display: flex;
  align-items: center;
  text-align: center;

  color: ${COLORS.gray8};
`;
export default TemplatePage;
