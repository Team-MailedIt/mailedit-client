import { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import COLORS, { colors } from '../../constants/colors';
import { useNavigate } from 'react-router';
import { ContentContext } from '../../contexts/ContentContext';

const TemplatePage = ({ getBlockFromTemplate, getAllBlockFromTemplate }) => {
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
    <Wrapper>
      <Back
        src={'/img/prevIcon.png'}
        alt="go to home button"
        onClick={goToMain}
      />

      {/* <HelpCircle src={help_circle} onClick={openHelp} /> */}
      <Template>
        {content ? (
          <>
            <Title>{content.title}</Title>
            <Top>
              <Subtitle>{parsedSubtitle}</Subtitle>
              <UseBtn onClick={handleAllTemplate}>템플릿 쓰기</UseBtn>
            </Top>
          </>
        ) : (
          <Container>
            <Illust src="/img/editorIllust.png" />
            <Span>템플릿을 조합해서 사용해 보세요!</Span>
          </Container>
        )}
      </Template>

      <Blocks>
        {parsedBlocks.map(({ id, html }, index) => (
          <Block id={index} key={id} onClick={onClickHandler}>
            {html}
          </Block>
        ))}
      </Blocks>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
`;

const Back = styled.img`
  width: 24px;
  height: 24px;

  margin-top: 3.5vh;
  margin-left: 4.7%;

  cursor: pointer;

  @media screen and (min-width: 1500px) {
    margin-top: 4vh;
  }
`;

const Template = styled.div`
  width: 83%;
  align-self: center;

  padding-left: 3%;
  padding-bottom: 27px;
`;

const Title = styled.div`
  width: 58%;
  margin-top: 18px;

  font-weight: 600;
  font-size: 18px;
`;

const Subtitle = styled.div`
  width: 58%;
  margin-top: 6px;

  font-weight: 300;
  font-size: 14px;
`;

const UseBtn = styled.button`
  width: 69px;
  height: 25px;
  border-radius: 3px;

  font-weight: 400;
  font-size: 11px;
  color: ${colors.default.white};
  background: ${colors.gray.gray7};
`;

const Top = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
`;

const Blocks = styled.div`
  width: 100%;
  max-height: 80vh;
  margin-top: 18px;

  overflow: auto;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${colors.main.main};
    border-radius: 20px;
  }
`;

const Block = styled.div`
  width: 95%;
  padding: 3px 9px;

  font-weight: 300;
  font-size: 12px;

  background: rgba(82, 116, 239, 0.15);
  border: 1px solid ${colors.main.main};
  border-radius: 2px;

  cursor: pointer;

  & + & {
    margin-top: 10px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 20vh;
`;

const Illust = styled.img`
  width: 296px;
  height: 230px;
`;

const Span = styled.span`
  font-weight: 400;
  font-size: 15px;
  margin-top: 12px;

  display: flex;
  align-items: center;
  text-align: center;

  color: ${COLORS.gray8};
`;
export default TemplatePage;
