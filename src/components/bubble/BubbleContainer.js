import styled from 'styled-components';
import ReactModal from 'react-modal';
import {
  Heading,
  SubHeading,
  AddNewGroupSpan,
  CancleButton,
  ConfirmButton,
  ColContainer,
  RowContainer,
} from './Components';
import GroupComponent from '../commons/GroupComponent';
import { useState } from 'react';
// import { GearIcon } from '../../constants/icons';
import { PlusIcon } from '../../constants/icons';
import { HorizontalLine } from '../workspace/Components';
import AddGroupContainer from './AddGroupContainer';
import DefaultContainer from './DefaultContainer';

const BubbleContainer = ({ isModalOpen, setIsModalOpen, fetchedData }) => {
  ReactModal.defaultStyles.overlay.backgroundColor = `rgb(0, 0, 0, 0)`;
  // 추가 기능이 있어서 set도 있어야 함
  const [group, setGroup] = useState(fetchedData);
  const [mode, setMode] = useState(true);

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleConfirm = () => {
    setIsModalOpen(false);
  };

  const handleMode = () => {
    setMode(false);
    console.log('>???');
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={() => setIsModalOpen(false)}
      ariaHideApp={false}
    >
      <ColContainer>
        <Heading>그룹 지정하기</Heading>
        <RowContainer style={{ paddingTop: '20px' }}>
          <SubHeading>기존 그룹</SubHeading>
          {/* <GearIcon src="./img/gear.png" /> */}
        </RowContainer>

        <ColContainer style={{ marginTop: '12px' }}>
          {group.map(({ title, color }, index) => {
            return (
              <div key={index} style={{ marginBottom: '10px' }}>
                <GroupComponent title={title} color={color} />
              </div>
            );
          })}
        </ColContainer>

        {mode ? (
          <div onClick={handleMode}>
            <DefaultContainer />
          </div>
        ) : (
          <AddGroupContainer />
        )}

        <HorizontalLine style={{ marginTop: '16px' }} />

        <RowContainer style={{ justifyContent: 'end', marginTop: '12px' }}>
          <CancleButton onClick={handleClose}>취소</CancleButton>
          <ConfirmButton onClick={handleConfirm} style={{ marginLeft: '8px' }}>
            확인
          </ConfirmButton>
        </RowContainer>
      </ColContainer>
    </Modal>
  );
};

const Modal = styled(ReactModal)`
  position: absolute;
  top: 17vh;
  left: 63.4vw;

  width: 328px;
  background: #ffffff;

  // looks
  background-color: #fff;
  padding: 1.125em 1.5em;
  font-size: 1.25em;
  border-radius: 12px;
  box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.3),
    0 0.0625rem 0.125rem rgba(0, 0, 0, 0.2);

  &::before {
    // layout
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    bottom: 100%;
    left: 1em; // offset should move with padding of parent
    border: 0.75rem solid transparent;
    border-top: none;

    // looks
    border-bottom-color: #fff;
    filter: drop-shadow(0 -0.0625rem 0.0625rem rgba(0, 0, 0, 0.1));
  }
`;
export default BubbleContainer;
