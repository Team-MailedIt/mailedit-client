import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useInput from '../../hooks/useInput';
import {
  TemplateTitleInput,
  TemplateMemoInput,
  TemplateSelectGroupButton,
  SubTitle,
  TemplateMemoInputContainer,
} from './Components';
import BubbleContainer from '../bubble/BubbleContainer';
import fetchedData from '../../fetchedData.json';
import GroupComponent from '../commons/GroupComponent';

const HeaderContainer = ({ handleHeaderData }) => {
  const [title, setTitle] = useInput('');
  const [subtitle, setSubtitle] = useInput('');
  const [group, setGroup] = useState({
    id: 0,
    title: '',
    color: '',
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  // set state to EditorContainer
  useEffect(() => {
    handleHeaderData({
      title: title,
      subtitle: subtitle,
      group: group,
    });
  }, [title, subtitle, group, handleHeaderData]);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const handleSelected = (target) => {
    setGroup(target);
  };
  const handleGroupComponent = () => {
    openModal();
  };

  return (
    <Container>
      <RowContainer>
        <TemplateTitleInput
          type="text"
          placeholder="템플릿의 제목을 입력하세요"
          size="50"
          value={title}
          onChange={setTitle}
        />
      </RowContainer>
      <RowContainer style={{ marginTop: '16px' }}>
        <SubTitle>메모</SubTitle>
        <TemplateMemoInputContainer>
          <TemplateMemoInput
            type="text"
            placeholder="상황, 받는 사람, 목적 등을 입력하세요"
            size="30"
            value={subtitle}
            onChange={setSubtitle}
          />
        </TemplateMemoInputContainer>
      </RowContainer>
      <RowContainer style={{ marginTop: '8px', marginBottom: '16px' }}>
        <SubTitle>그룹</SubTitle>
        {group.title ? (
          <GroupComponent
            title={group.title}
            color={group.color}
            handleSelectGroup={handleGroupComponent}
          />
        ) : (
          <TemplateSelectGroupButton onClick={openModal}>
            그룹 지정하기
          </TemplateSelectGroupButton>
        )}
      </RowContainer>
      <BubbleContainer
        isModalOpen={isModalOpen}
        fetchedData={fetchedData}
        setIsModalOpen={setIsModalOpen}
        handleSelected={handleSelected}
      />
    </Container>
  );
};

export default HeaderContainer;

const Container = styled.div`
  /* display: flex; */
  /* flex-direction: 'column'; */
  /* width: 460px; */
  diaplay: flex;
  margin-top: 72px;
  margin-left: 40px;
`;
const RowContainer = styled.div`
  display: flex;
  flex-direction: 'row';
`;
