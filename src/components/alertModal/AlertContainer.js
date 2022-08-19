import ReactModal from 'react-modal';
import styled from 'styled-components';
import { colors } from '../../constants/colors';

const AlertContainer = ({
  isAlertOpen,
  setIsAlertOpen,
  title,
  text1,
  text2,
}) => {
  const onClick = () => {
    setIsAlertOpen(false);
  };

  return (
    <Modal
      isOpen={isAlertOpen}
      onRequestClose={() => {
        setIsAlertOpen(false);
      }}
      ariaHideApp={false}
      overlayClassName="Overlay"
    >
      <Title>{title}</Title>
      <Text>
        <span>{text1}</span>
        <span>{text2}</span>
      </Text>
      <ConfirmBtn onClick={onClick}>확인</ConfirmBtn>
    </Modal>
  );
};

const Modal = styled(ReactModal)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 309px;
  padding-bottom: 24px;
  background: #ffffff;
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  align-items: center;

  &:focus {
    outline: none;
  }
`;

const Title = styled.span`
  margin-top: 28px;
  font-weight: 600;
  font-size: 18px;
  color: ${colors.main.main};
`;

const Text = styled.div`
  width: 240px;
  height: 42px;
  margin-top: 12px;
  font-size: 15px;
  line-height: 21px;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  letter-spacing: -0.01em;
  color: ${colors.default.black};
`;

const ConfirmBtn = styled.button`
  width: 109px;
  height: 30px;
  margin-top: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${colors.default.white};
  background: ${colors.main.main};
  border-radius: 3px;

  font-weight: 500;
  font-size: 12px;
`;

export default AlertContainer;
