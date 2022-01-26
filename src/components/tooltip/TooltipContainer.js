import styled from 'styled-components';
import ReactModal from 'react-modal';
import COLORS from '../../constants/colors';
import { useContext } from 'react';
import { ElementPositionContext } from '../../contexts/ElementPositionContexts';
import CarouselTooltip from '../carousel/CarouselTooltip';

const TooltipContainer = ({ isModalOpen, setIsModalOpen, ChildComponent }) => {
  ReactModal.defaultStyles.overlay.backgroundColor = `rgb(0, 0, 0, 0)`;

  // 취소 버튼
  const handleClose = () => {
    setIsModalOpen(false);
  };

  // 확인 버튼
  const handleConfirm = () => {
    setIsModalOpen(false);
  };

  // modal 위치
  const { position } = useContext(ElementPositionContext);

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={() => {
        setIsModalOpen(false);
      }}
      ariaHideApp={false}
      positionTop={position.y - 22}
      positionLeft={position.x}
    >
      <Container>
        <CarouselTooltip />
      </Container>
    </Modal>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Modal = styled(ReactModal)`
  position: absolute;
  top: ${(props) => props.positionTop}px;
  left: ${(props) => props.positionLeft}px;
  transform: translate(-130%, 0%);

  background: ${COLORS.gray7};

  padding: 1.125em 1.5em;
  font-size: 1.25em;

  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 4px;

  &::before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: auto;
    right: -22px;

    border: 0.75rem solid transparent;

    border-left-color: ${COLORS.gray7};
  }
`;
export default TooltipContainer;
