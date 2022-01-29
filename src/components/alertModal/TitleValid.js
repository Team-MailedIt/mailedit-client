import { ColContainer } from '../bubble/Components';
import { BodySpan, ConfirmButton } from './Components';

const TitleValid = ({ setIsAlertOpen }) => {
  const onClick = () => {
    setIsAlertOpen(false);
  };
  return (
    <ColContainer style={{ justifyContent: 'center', alignItems: 'center' }}>
      <BodySpan style={{ marginTop: '24px' }}>
        템플릿 제목은 필수입니다.
      </BodySpan>
      <BodySpan>제목을 입력해주세요.</BodySpan>
      <ConfirmButton onClick={onClick} style={{ marginTop: '24px' }}>
        확인
      </ConfirmButton>
    </ColContainer>
  );
};

export default TitleValid;
