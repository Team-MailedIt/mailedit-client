import styled from 'styled-components';
import {
  TemplateTitleInput,
  TemplateMemoInput,
  TemplateSelectGroupButton,
  SubTitle,
  TemplateMemoInputContainer,
} from './Components';
const HeaderContainer = () => {
  return (
    <Container>
      <RowContainer>
        <TemplateTitleInput
          type="text"
          placeholder="템플릿의 제목을 입력하세요"
          size="50"
          // value={username}
          // onChange={setUserId}
        />
      </RowContainer>
      <RowContainer style={{ marginTop: '16px' }}>
        <SubTitle>메모</SubTitle>
        <TemplateMemoInputContainer>
          <TemplateMemoInput
            type="text"
            placeholder="상황, 받는 사람, 목적 등을 입력하세요"
            size="30"
            // value={username}
            // onChange={setUserId}
          />
        </TemplateMemoInputContainer>
      </RowContainer>
      <RowContainer style={{ marginTop: '8px', marginBottom: '16px' }}>
        <SubTitle>그룹</SubTitle>
        <TemplateSelectGroupButton>그룹 지정하기</TemplateSelectGroupButton>
      </RowContainer>
    </Container>
  );
};

export default HeaderContainer;

const Container = styled.div`
  /* display: flex; */
  /* flex-direction: 'column'; */
  /* margin-top: 72px; */
  margin-left: 40px;
`;
const RowContainer = styled.div`
  display: flex;
  flex-direction: 'row';
`;
