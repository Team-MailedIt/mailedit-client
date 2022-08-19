import { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';

import API from '../../utils/API';
import CheckBox from './CheckBox';
import Search from '../commons/Search';
import COLORS, { colors } from '../../constants/colors';
import SidebarGroup from '../commons/SidebarGroup';

import star from '../../constants/icons/star.svg';
import logo from '../../constants/icons/logo.svg';

import { ContentContext } from '../../contexts/ContentContext';
import { FilterLikeContext } from '../../contexts/FilterLikeContext';
import { SelectGroupContext } from '../../contexts/SelectGroupContext';
import { AuthContext } from '../../contexts/AuthContext';

const MainSidebar = () => {
  const [groups, setGroups] = useState([]);
  const [myTemplates, setMyTemplates] = useState([]);
  const [baseTemplates, setBaseTemplates] = useState([]);
  const [groupIdList, setGroupIdList] = useState([]);

  const { likes, setLikesHandler } = useContext(FilterLikeContext);
  const { setContentHandler } = useContext(ContentContext);
  const { isLogin } = useContext(AuthContext);

  const { selectedGroupId, setSelectGroupHandler } =
    useContext(SelectGroupContext);

  useEffect(() => {
    const getGroups = async () => {
      const { data } = await API.get('/groups/');
      setGroups(data);
      data.forEach((group) => {
        setGroupIdList((id) => [...id, group.id]);
        setSelectGroupHandler((id) => [...id, group.id]);
      });
    };

    isLogin && getGroups();

    const getMy = async () => {
      const { data } = await API.get('/templates/my');
      setMyTemplates(data);
    };

    isLogin && getMy();

    const getBase = async () => {
      const { data } = await API.get('/templates/base');
      setBaseTemplates(data);
    };

    getBase();
  }, [isLogin, setSelectGroupHandler]);

  const handleSelectAll = (e) => {
    setLikesHandler(false);
    setSelectGroupHandler(e.target.checked ? groupIdList : []);
  };

  const handleSelectElement = (e, id) => {
    setLikesHandler(false);

    if (e.target.checked) {
      setSelectGroupHandler([...selectedGroupId, id]);
    } else {
      setSelectGroupHandler(
        selectedGroupId.filter((checkedId) => checkedId !== id)
      );
    }
  };

  const handleSelectLike = () => {
    setLikesHandler(!likes);

    !likes && setSelectGroupHandler([]);
  };

  const handleContents = (object) => {
    setContentHandler(object);
  };

  return (
    <Wrapper>
      <FixedSection>
        <Logo src={logo} />
        <Search
          all={[...myTemplates, ...baseTemplates]}
          handleContents={handleContents}
        />
      </FixedSection>

      <VariableSection>
        <MyTemplate>마이템플릿</MyTemplate>

        <SidebarGroup
          title="즐겨찾기"
          icon={<StarIcon src={star} />}
          item={
            <CheckBox id="like" checked={likes} onChange={handleSelectLike} />
          }
        />
        <Border />
        <SidebarGroup
          title="전체 선택"
          item={
            <CheckBox
              id="all"
              type="checkbox"
              checked={selectedGroupId.length === groupIdList.length}
              onChange={handleSelectAll}
            />
          }
        />
        {/* <SidebarGroup
          title="제목제목제목"
          icon={<Index color={'#38D9A9'} />}
          item={
            <CheckBox
              id={1}
              type="checkbox"
              checked={selectedGroupId.includes(1)}
              onChange={(e) => handleSelectElement(e, 1)}
            />
          }
        />
        <SidebarGroup
          title="제목제목제목제목제목제목"
          icon={<Index color={'#38D9A9'} />}
          item={
            <CheckBox
              id={1}
              type="checkbox"
              checked={selectedGroupId.includes(1)}
              onChange={(e) => handleSelectElement(e, 1)}
            />
          }
        /> */}
        {groups.map((group, i) => (
          <SidebarGroup
            key={'g' + i}
            title={group.name}
            icon={<Index color={group.color} />}
            item={
              <CheckBox
                id={group.id}
                type="checkbox"
                checked={selectedGroupId.includes(group.id)}
                onChange={(e) => handleSelectElement(e, group.id)}
              />
            }
          />
        ))}
      </VariableSection>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  grid-area: sidebar;

  width: 100%;
  min-width: 246px;
  max-width: 246px;
  background: ${colors.main.main};
`;

const FixedSection = styled.section`
  width: 100%;
  padding: 27px 27px 0px 30px;

  display: flex;
  flex-direction: column;
`;

const VariableSection = styled.section`
  width: 100%;
  /* height: 872px; */
  height: 76vh;
  padding-left: 30px;
  margin-top: 32px;

  display: flex;
  flex-direction: column;
`;

const Logo = styled.img`
  width: 165px;
  height: 33px;
`;

const MyTemplate = styled.span`
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 16px;
  color: ${COLORS.UIWhite};
`;

const StarIcon = styled.img`
  width: 14px;
  height: 14px;

  margin: 3px 8px 3px 1px;
`;

const Border = styled.div`
  width: 186px;
  height: 0.5px;

  margin: 10px 0px 4px 4px;

  background: rgba(255, 255, 255, 0.25);
`;

const Index = styled.div`
  width: 3px;
  height: 12px;

  margin-right: 6px;

  border-radius: 1px;
  background: ${(props) => props.color};
`;

export default MainSidebar;
