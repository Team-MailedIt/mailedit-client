import { ColContainer, RowContainer } from '../bubble/Components';
import { BodySpan, BodySpanBold, ConfirmButton, Heading } from './Components';

const CopyContents = ({ handleOnClick }) => {
  const onClick = () => {
    handleOnClick();
  };
  return (
    <ColContainer style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Heading>템플릿 복사 완료!</Heading>
      <BodySpan style={{ marginTop: '24px' }}>복사된 템플릿은</BodySpan>
      <RowContainer>
        <BodySpanBold>Ctrl + v</BodySpanBold>
        <BodySpan>로 붙여넣기할 수 있어요</BodySpan>
      </RowContainer>
      <ConfirmButton onClick={onClick} style={{ marginTop: '24px' }}>
        확인
      </ConfirmButton>
    </ColContainer>
  );
};

export default CopyContents;
