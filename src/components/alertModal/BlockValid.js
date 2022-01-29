import { ColContainer } from '../bubble/Components';
import { BodySpan, ConfirmButton } from './Components';

const BlockValid = ({ setIsAlertOpen }) => {
  const onClick = () => {
    setIsAlertOpen(false);
  };
  return (
    <ColContainer style={{ justifyContent: 'center', alignItems: 'center' }}>
      <BodySpan style={{ marginTop: '24px' }}>
        저장할 블럭이 존재하지 않습니다.
      </BodySpan>
      <BodySpan>최소 1개의 블럭이 존재해야 합니다.</BodySpan>
      <ConfirmButton onClick={onClick} style={{ marginTop: '24px' }}>
        확인
      </ConfirmButton>
    </ColContainer>
  );
};

export default BlockValid;
