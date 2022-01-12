import styled from 'styled-components';
import ReactModal from 'react-modal';
import {
  Heading,
  SubHeading,
  CancleButton,
  ConfirmButton,
  ColContainer,
  RowContainer,
  AddGroupButton,
} from './Components';
import GroupComponent from '../commons/GroupComponent';
import { useState } from 'react';
// import { GearIcon } from '../../constants/icons';
import { HorizontalLine } from '../workspace/Components';
import AddGroupContainer from './AddGroupContainer';
import DefaultContainer from './DefaultContainer';

const BubbleContainer = ({
  isModalOpen,
  setIsModalOpen,
  fetchedData,
  handleSelected,
}) => {
  ReactModal.defaultStyles.overlay.backgroundColor = `rgb(0, 0, 0, 0)`;
  // 추가 기능이 있어서 set도 있어야 함
  const [group, setGroup] = useState(fetchedData);
  const [mode, setMode] = useState(true);
  const [selected, setSelected] = useState({
    id: 0,
    title: '',
    color: '',
  });
  const [addChecker, setAddChecker] = useState(false);
  const [temp, setTemp] = useState({});

  // state 초기화
  const init = () => {
    setMode(true);
    setSelected({
      id: 0,
      title: '',
      color: '',
    });
    setAddChecker(false);
  };

  // 취소 버튼
  const handleClose = () => {
    setIsModalOpen(false);
    init();
  };

  // 확인 버튼
  const handleConfirm = () => {
    setIsModalOpen(false);
    init();
    handleSelected(selected);
  };

  // 새 그룹 추가 확인 버튼
  const handleConfirmAddNewGroup = () => {
    // add new group!
    if (addChecker) {
      const prevState = [...group, temp];
      setGroup(prevState);
      init();
    } else {
      setIsModalOpen(false);
      init();
    }
    handleSelected(selected);
  };

  // 새 그룹 추가하기 버튼 클릭
  const handleMode = () => {
    setMode(false);
  };

  // 그룹 클릭하여 선택하였을 때 return으로 해당 그룹 정보 받음
  const handleSelectGroup = (groupData) => {
    setSelected(groupData);
  };

  const formChecker = (validator) => {
    if (validator) setAddChecker(true);
  };

  const handleAddNewGroup = (element) => {
    setTemp(element);
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={() => {
        setIsModalOpen(false);
        init();
      }}
      ariaHideApp={false}
    >
      <ColContainer>
        {mode ? (
          <Heading>그룹 지정하기</Heading>
        ) : (
          <Heading>새 그룹 추가하기</Heading>
        )}
        <RowContainer style={{ paddingTop: '20px' }}>
          <SubHeading>기존 그룹</SubHeading>
          {/* <GearIcon src="./img/gear.png" /> */}
        </RowContainer>

        <ColContainer style={{ marginTop: '12px' }}>
          {group.map(({ title, color, id }) => {
            return (
              <div key={id} style={{ marginBottom: '2px' }}>
                <GroupComponent
                  title={title}
                  color={color}
                  id={id}
                  selected={selected.title}
                  handleSelectGroup={handleSelectGroup}
                />
              </div>
            );
          })}
        </ColContainer>

        {mode ? (
          <div onClick={handleMode}>
            <DefaultContainer />
          </div>
        ) : (
          <AddGroupContainer
            formChecker={formChecker}
            handleAddNewGroup={handleAddNewGroup}
          />
        )}

        <HorizontalLine style={{ marginTop: '16px' }} />

        <RowContainer style={{ justifyContent: 'end', marginTop: '12px' }}>
          <CancleButton onClick={handleClose}>취소</CancleButton>
          {mode ? (
            <ConfirmButton
              onClick={handleConfirm}
              style={{ marginLeft: '8px' }}
            >
              확인
            </ConfirmButton>
          ) : (
            <AddGroupButton
              onClick={handleConfirmAddNewGroup}
              style={{ marginLeft: '8px' }}
              addChecker={addChecker}
            >
              추가하기
            </AddGroupButton>
          )}
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
