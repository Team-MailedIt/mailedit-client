import { useEffect, useState, useContext, useRef } from 'react';
import styled from 'styled-components';
import useInput from '../../hooks/useInput';
import {
  TemplateTitleInput,
  TemplateMemoInput,
  TemplateSelectGroupButton,
  SubTitle,
  TemplateMemoInputContainer,
} from './Components';
import BubbleContainer from '../bubble/BubbleContainer';
import GroupComponent from '../commons/GroupComponent';
import API from '../../utils/API';
import { GroupContext } from '../../contexts/GroupContexts';
import icon_help from '../../constants/icons/icon_help.svg';
import TooltipContainer from '../tooltip/TooltipContainer';
import { ElementPositionContext } from '../../contexts/ElementPositionContexts';
import CarouselTooltip from '../carousel/CarouselTooltip';
import { AuthContext } from '../../contexts/AuthContext';
import AlertContainer from '../alertModal/AlertContainer';
import NotRegistered from '../alertModal/NotRegistered';

const HeaderContainer = ({ handleHeaderData }) => {
  const { isLogin } = useContext(AuthContext);

  const [title, setTitle] = useInput('');
  const [subtitle, setSubtitle] = useInput('');
  const [group, setGroup] = useState({
    id: 0,
    name: '',
    color: '',
  });

  // alert when not registered
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  // 그룹 리스트
  const { setGroupList } = useContext(GroupContext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const bubbleModal = useRef();

  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const tooltipIcon = useRef();
  const { getPosition } = useContext(ElementPositionContext);

  // fetch group list data from server
  useEffect(() => {
    if (isLogin) {
      const fetchGroupList = async () => {
        const response = await API.get(`/groups/`);
        setGroupList(response.data);
      };
      fetchGroupList();
    }
  }, [isLogin, setGroupList]);

  // set state to EditorContainer
  useEffect(() => {
    handleHeaderData({
      title: title,
      subtitle: subtitle,
      group: group,
    });
  }, [title, subtitle, group, handleHeaderData]);

  const openTooltip = () => {
    setIsTooltipOpen(true);
    getPosition(tooltipIcon);
  };
  const openModal = () => {
    if (isLogin) {
      // console.log(isLogin);
      setIsModalOpen(true);
      getPosition(bubbleModal);
    } else {
      // console.log(isLogin);
      setIsAlertOpen(true);
    }
  };
  const handleSelected = (target) => {
    setGroup(target);
  };
  const handleGroupComponent = () => {
    openModal();
  };

  return (
    <Container>
      <RowContainer>
        <TemplateTitleInput
          type="text"
          placeholder="템플릿의 제목을 입력하세요"
          size="100"
          maxLength={50}
          value={title}
          onChange={setTitle}
        />
      </RowContainer>
      <RowContainer style={{ marginTop: '16px' }}>
        <SubTitle>메모</SubTitle>
        <TemplateMemoInputContainer>
          <TemplateMemoInput
            type="text"
            placeholder="상황, 받는 사람, 목적 등을 입력하세요"
            size="50"
            maxLength={50}
            value={subtitle}
            onChange={setSubtitle}
          />
        </TemplateMemoInputContainer>
      </RowContainer>
      <RowContainer
        style={{
          marginTop: '8px',
          marginBottom: '16px',
          justifyContent: 'space-between',
        }}
      >
        <RowContainer>
          <SubTitle ref={bubbleModal}>그룹</SubTitle>
          {group.name ? (
            <GroupComponent
              name={group.name}
              color={group.color}
              handleSelectGroup={handleGroupComponent}
            />
          ) : (
            <TemplateSelectGroupButton onClick={openModal}>
              그룹 지정하기
            </TemplateSelectGroupButton>
          )}
        </RowContainer>
        <HelpIcon
          ref={tooltipIcon}
          style={{ marginRight: '12px' }}
          src={icon_help}
          onClick={openTooltip}
        />
      </RowContainer>
      <TooltipContainer
        isModalOpen={isTooltipOpen}
        setIsModalOpen={setIsTooltipOpen}
        ChildComponent={CarouselTooltip}
        positionX={0}
        positionY={0}
      />
      <AlertContainer
        isAlertOpen={isAlertOpen}
        setIsAlertOpen={setIsAlertOpen}
        ChildComponent={NotRegistered}
      />
      <BubbleContainer
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        handleSelected={handleSelected}
      />
    </Container>
  );
};

export default HeaderContainer;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 460px; */

  margin-top: 72px;
  /* margin-left: 40px;
  margin-right: 40px; */
`;
const RowContainer = styled.div`
  display: flex;
  flex-direction: 'row';
`;
const HelpIcon = styled.img`
  width: 24px;
  height: 24px;
  &:hover {
    cursor: pointer;
  }
`;
