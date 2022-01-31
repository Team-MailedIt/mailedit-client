import { ColContainer } from '../bubble/Components';
import { BodySpan, ConfirmButton } from './Components';

const NotRegistered = ({ setIsAlertOpen }) => {
  const onClick = () => {
    setIsAlertOpen(false);
  };
  return (
    <ColContainer style={{ justifyContent: 'center', alignItems: 'center' }}>
      <BodySpan style={{ marginTop: '24px' }}>아직 회원이 아니신가요?</BodySpan>
      <BodySpan>가입하여 더 많은 서비스를 이용해보세요.</BodySpan>
      <ConfirmButton onClick={onClick} style={{ marginTop: '24px' }}>
        확인
      </ConfirmButton>
    </ColContainer>
  );
};

export default NotRegistered;
