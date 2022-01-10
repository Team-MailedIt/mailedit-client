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
const HeaderContainer = ({ handleHeaderData }) => {
  const [title, setTitle] = useInput('');
  const [subtitle, setSubtitle] = useInput('');
  const [group, setGroup] = useState();

  // set state to EditorContainer
  useEffect(() => {
    handleHeaderData({
      title: title,
      subtitle: subtitle,
      group: { name: '학교', color: '#38D9A9' },
    });
  }, [title, subtitle, group]);

  const handleGroup = () => {
    window.alert('아직 미구현');
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
        <TemplateSelectGroupButton onClick={handleGroup}>
          그룹 지정하기
        </TemplateSelectGroupButton>
      </RowContainer>
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
