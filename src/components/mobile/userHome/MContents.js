import { useContext } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../../../constants/colors';
import { SelectTemplateContext } from '../../../contexts/SelectTemplateContext';
import MModal from './MModal';

export default function MContents({ arr, title, subtitle, imgSrc }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { setSelectIdHandler } = useContext(SelectTemplateContext);

  // when clicking base template menu
  const handleTitleClick = (e) => {
    setSelectIdHandler(e.target.id);
    setIsModalOpen(!isModalOpen);
  };

  return (
    <Wrapper>
      <MModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <Title onClick={handleTitleClick}>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <Contents>
        <Border />
        <List>
          {arr.map((a) => (
            <SpanWrapper>
              <Span>{a}</Span>
            </SpanWrapper>
          ))}
        </List>
        <Image src={imgSrc} alt="mobile home company" />
      </Contents>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 90%;
  margin-top: 32px;

  & + & {
    margin-top: 35px;
  }
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 20px;
  opacity: 0.8;
  color: ${colors.main.indigo6};

  @media screen and (max-width: 375px) {
    font-size: 18px;
  }
`;

const Subtitle = styled.div`
  margin-top: 6px;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: ${colors.main.indigo6};
`;

const Contents = styled.div`
  margin-top: 18px;

  display: flex;
`;

const Border = styled.div`
  width: 1px;
  margin-top: 4px;
  margin-left: 8px;

  background: ${colors.main.indigo2};
`;

const List = styled.div`
  margin-left: 12px;
  margin-right: 19px;
`;

const SpanWrapper = styled.div`
  & + & {
    margin-top: 8px;
  }
`;

const Span = styled.span`
  padding: 4px;

  font-weight: 400;
  font-size: 12px;
  color: ${colors.default.black};

  &:hover {
    background: ${colors.main.indigo1};
  }
`;

const Image = styled.img`
  width: 222px;
  align-self: flex-end;

  position: relative;
  z-index: 1;

  @media screen and (max-width: 375px) {
    width: 190px;
  }
`;
