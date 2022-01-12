import { ColContainer, RowContainer } from '../bubble/Components';
import { BodySpan, BodySpanBold, ConfirmButton, Heading } from './Components';

const SaveContents = ({ handleOnClick }) => {
  const onClick = () => {
    handleOnClick();
  };
  return (
    <ColContainer style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Heading>템플릿 저장 완료!</Heading>
      <BodySpan style={{ marginTop: '24px' }}>저장된 템플릿은</BodySpan>
      <RowContainer>
        <BodySpanBold>마이템플릿</BodySpanBold>
        <BodySpan>에서 확인할 수 있어요</BodySpan>
      </RowContainer>
      <ConfirmButton onClick={onClick} style={{ marginTop: '24px' }}>
        확인
      </ConfirmButton>
    </ColContainer>
  );
};

export default SaveContents;
