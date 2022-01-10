import styled from 'styled-components';
import ReactModal from 'react-modal';
import {
  Heading,
  SubHeading,
  AddNewGroupSpan,
  CancleButton,
  ConfirmButton,
} from './Components';
import GroupComponent from '../commons/GroupComponent';
import { useState } from 'react';
// import { GearIcon } from '../../constants/icons';
import { PlusIcon } from '../../constants/icons';
import { HorizontalLine, VerticalLine } from '../workspace/Components';

const BubbleContainer = ({ isModalOpen, setIsModalOpen, fetchedData }) => {
  ReactModal.defaultStyles.overlay.backgroundColor = `rgb(0, 0, 0, 0)`;
  const [group, setGroup] = useState(fetchedData);

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={() => setIsModalOpen(false)}
      ariaHideApp={false}
    >
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Heading>그룹 지정하기</Heading>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <SubHeading>기존 그룹</SubHeading>
          {/* <GearIcon src="./img/gear.png" /> */}
        </div>
        {group.map(({ title, color }, index) => {
          return <GroupComponent key={index} title={title} color={color} />;
        })}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <PlusIcon src="./img/plus.png" />
          <AddNewGroupSpan>새 그룹 추가하기</AddNewGroupSpan>
        </div>
        <HorizontalLine />
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <CancleButton>취소</CancleButton>
          <ConfirmButton>확인</ConfirmButton>
        </div>
      </div>
    </Modal>
  );
};

const Modal = styled(ReactModal)`
  position: absolute;
  top: 17vh;
  left: 63.4vw;

  width: 336px;
  background: #ffffff;

  // looks
  background-color: #fff;
  padding: 1.125em 1.5em;
  font-size: 1.25em;
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);

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
