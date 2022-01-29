import { ColContainer, RowContainer } from '../bubble/Components';
import { BodySpan, ConfirmButton, Heading } from './Components';

const CopyContents = ({ handleOnClick }) => {
  const onClick = () => {
    handleOnClick();
  };
  return (
    <ColContainer style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Heading>템플릿 복사 완료!</Heading>
      <BodySpan style={{ marginTop: '24px' }}>복사된 템플릿을</BodySpan>
      <RowContainer>
        <BodySpan>메일에 붙여넣어 사용해보세요.</BodySpan>
      </RowContainer>
      <ConfirmButton onClick={onClick} style={{ marginTop: '24px' }}>
        확인
      </ConfirmButton>
    </ColContainer>
  );
};

export default CopyContents;
