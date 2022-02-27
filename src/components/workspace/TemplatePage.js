import { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import COLORS from '../../constants/colors';
import {
  TemplateSubTitle,
  TemplateTitle,
  TemplateSelectButton,
} from './Components';
import { PrevIcon } from '../../constants/icons';
import { useNavigate } from 'react-router';
import { ContentContext } from '../../contexts/ContentContext';
import HelpModal from '../helpModal/HelpModal';

const TemplatePage = ({ getBlockFromTemplate, getAllBlockFromTemplate }) => {
  // 모달모달
  const [isModalOpen, setIsModalOpen] = useState(true);
  useEffect(() => {
    if (localStorage.getItem('tooltip') === 'false') {
      setIsModalOpen(false);
    }
  }, []);

  const openHelp = () => {
    setIsModalOpen(true);
  };

  // setBlock used when user select template from sidebar
  const [blocks, setBlocks] = useState([]);
  const [parsedBlocks, setParsedBlocks] = useState([]);
  const { content } = useContext(ContentContext);
  const [parsedSubtitle, setParsedSubtitle] = useState('');

  // subtitle parse
  useEffect(() => {
    if (content) {
      const parsed = content.subtitle.replace(/<[^>]*>/g, '');
      setParsedSubtitle(parsed);
    }
  }, [setParsedSubtitle, content]);

  // navigate to main page
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/home');
  };

  // data fetched from sidebar
  useEffect(() => {
    if (content) {
      setBlocks(content.content);
    }
  }, [content]);

  useEffect(() => {
    const updatedBlocks = [...blocks];
    blocks.forEach((element, index) => {
      const temp = element.html
        .replace(/<div>/gi, '\n')
        .replace(/<\/div>/gi, '')
        .replace(/<br>/gi, '\n');
      updatedBlocks[index] = {
        ...updatedBlocks[index],
        html: temp,
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
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '65px auto',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <RowContainer style={{ marginTop: '42px', marginLeft: '36px' }}>
            <PrevIcon
              onClick={goToMain}
              src="img/prevIcon.png"
              width="32px"
              height="32px"
            />
          </RowContainer>
          <HelpCircle
            src={`${process.env.PUBLIC_URL}/img/help_circle.svg`}
            onClick={openHelp}
          />
        </div>
        <div
          style={{ marginRight: '40px', marginTop: '76px', minWidth: '490px' }}
        >
          {content ? (
            <Container style={{ marginTop: '24px' }}>
              <RowContainer>
                <TemplateTitle>{content.title}</TemplateTitle>
              </RowContainer>
              <RowContainer style={{ justifyContent: 'space-between' }}>
                <TemplateSubTitle>{parsedSubtitle}</TemplateSubTitle>
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
          <TemplateContainer style={{ marginTop: '20px' }}>
            {parsedBlocks.map(({ id, html }, index) => (
              <Block id={index} key={id} onClick={onClickHandler}>
                {html}
              </Block>
            ))}
          </TemplateContainer>
        </div>
      </div>
      <HelpModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
};
const HelpCircle = styled.img`
  width: 44px;
  height: 44px;
  margin-left: 24px;
  margin-bottom: 24px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 24px;
  padding-right: 24px;
`;
const TemplateContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 790px;
  padding-left: 24px;
  padding-right: 24px;
  overflow-y: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${COLORS.primary};
    border-radius: 80px;
    height: 20px;
  }
`;
const RowContainer = styled.div`
  display: flex;
  flex-direction: 'row';
  align-items: 'center';
  margin-bottom: 8px;
`;
const Block = styled.div`
  width: calc(100% - 1rem);
  padding: 4px 12px;
  outline-color: '#4C6EF5';

  white-space: pre-wrap;
  border: 1px solid ${COLORS.blockBorder};
  background: ${COLORS.blockBackground};
  border-radius: 2px;

  margin-top: 6px;
  margin-bottom: 6px;

  line-height: 24px;
  font-size: 16px;
  -webkit-user-select: none;
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
