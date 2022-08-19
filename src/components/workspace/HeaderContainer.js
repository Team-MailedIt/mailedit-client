import { useEffect, useState, useContext, useRef } from 'react';
import styled from 'styled-components';
import useInput from '../../hooks/useInput';

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
import { colors } from '../../constants/colors';

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
      setIsModalOpen(true);
      getPosition(bubbleModal);
    } else {
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
    <Wrapper>
      <Top>
        <Title
          placeholder="템플릿의 제목을 입력하세요"
          value={title}
          onChange={setTitle}
        ></Title>
        <ItemWrapper>
          <Span>메모</Span>
          <Memo
            placeholder="상황, 받는 사람, 목적 등을 입력하세요"
            spellCheck={false}
            value={subtitle}
            onChange={setSubtitle}
          />
        </ItemWrapper>
        <GroupItemWrapper>
          <SpanButton>
            <Span ref={bubbleModal}>그룹</Span>
            {group.name ? (
              <GroupComponent
                name={group.name}
                color={group.color}
                handleSelectGroup={handleGroupComponent}
              />
            ) : (
              <GroupBtn onClick={openModal}>그룹 지정하기</GroupBtn>
            )}
          </SpanButton>

          <ToolTipBtn
            ref={tooltipIcon}
            src={icon_help}
            alt="workspace tooltip"
            onClick={openTooltip}
          />
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
            text1="아직 회원이 아니신가요?"
            text2="가입하여 더 많은 서비스를 이용해 보세요."
          />
          <BubbleContainer
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            handleSelected={handleSelected}
          />
        </GroupItemWrapper>
      </Top>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  padding-top: 6vh;

  display: flex;
  flex-direction: column;
`;

const Top = styled.div`
  width: 100%;
`;

const Title = styled.input`
  width: 64%;
  background: none;
  margin-bottom: 4px;

  font-weight: 500;
  font-size: 18px;

  border: none;

  ::placeholder {
    color: ${colors.gray.gray5};
  }
`;

const ItemWrapper = styled.div`
  width: 100%;
  margin-top: 8px;

  display: flex;
  align-items: center;
`;

const GroupItemWrapper = styled.div`
  width: 100%;
  margin-top: 8px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Span = styled.span`
  margin-right: 16px;

  font-weight: 400;
  font-size: 12px;
`;

const Memo = styled.input`
  width: 57%;
  height: 21px;
  padding: 4px 9px;

  border: none;

  border-radius: 2px;
  background: ${colors.gray.gray1};

  font-weight: 500;
  font-size: 11px;

  ::placeholder {
    color: ${colors.gray.gray5};
  }
`;

const GroupBtn = styled.button`
  width: 70px;
  height: 19px;
  padding: 0px 7.5px;

  font-weight: 400;
  font-size: 9px;
  border-radius: 3px;

  color: ${colors.default.white};
  background: ${colors.main.indigo4};
`;

const SpanButton = styled.div`
  width: 110px;
  display: flex;
`;

const ToolTipBtn = styled.img`
  width: 22px;
  height: 22px;
  margin-right: 10px;

  cursor: pointer;
`;

export default HeaderContainer;
