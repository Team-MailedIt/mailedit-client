import { useEffect, useState, useContext } from "react";
import styled from "styled-components";

import API from "../../utils/API";
import CheckBox from "./CheckBox";
import Search from "../commons/Search";
import COLORS from "../../constants/colors";
import SidebarGroup from "../commons/SidebarGroup";

import star from "../../constants/icons/star.svg";
import logo from "../../constants/icons/logo.svg";

import { FilterLikeContext } from "../../contexts/FilterLikeContext";
import { SelectGroupContext } from "../../contexts/SelectGroupContext";

const MainSidebar = () => {
  const [groups, setGroups] = useState([]);
  const [myTemplates, setMyTemplates] = useState([]);
  const [groupIdList, setGroupIdList] = useState([]);
  const [content, setContent] = useState(null);

  const { likes, setLikesHandler } = useContext(FilterLikeContext);
  const { selectedGroupId, setSelectGroupHandler } =
    useContext(SelectGroupContext);

  useEffect(() => {
    API.get("/groups").then((res) => {
      setGroups(res.data);
      res.data.map((group) => {
        setGroupIdList((selectedGroupId) => [...selectedGroupId, group.id]);
        setSelectGroupHandler((selectedGroupId) => [
          ...selectedGroupId,
          group.id,
        ]);
      });
    });

    API.get("/templates/my").then((res) => {
      setMyTemplates(res.data);
    });

    setSelectGroupHandler(groupIdList);
  }, []);

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
    setContent(object);
  };

  return (
    <Wrapper>
      <FixedSection>
        <Logo src={logo} />
        <Search all={myTemplates} handleContents={handleContents} />
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
        {groups.map((group, i) => (
          <SidebarGroup
            key={"g" + i}
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
  width: 328px;

  background: ${COLORS.primary};
`;

const FixedSection = styled.section`
  width: 100%;
  height: 208px;

  display: flex;
  flex-direction: column;
`;

const VariableSection = styled.section`
  width: 100%;
  height: 872px;

  margin-left: 40px;

  display: flex;
  flex-direction: column;
`;

const Logo = styled.img`
  width: 220px;
  height: 44px;

  margin: 36px 68px 0 40px;
`;

const MyTemplate = styled.span`
  width: 96px;
  height: 26px;

  margin-bottom: 8px;

  font-size: 22px;
  color: ${COLORS.UIWhite};
`;

const StarIcon = styled.img`
  width: 18px;
  height: 18px;

  margin: 3px 8px 3px 4px;
`;

const Border = styled.div`
  width: 246px;
  height: 0.5px;

  margin: 18px 0px 4px 4px;

  background: rgba(255, 255, 255, 0.25);
`;

const NoTemplates = styled.div`
  width: 249px;
  height: 44px;

  margin: 24px 39px 0px 40px;

  color: #ffffff;
  font-size: 16px;
  line-height: 22px;

  font-family: "Pretendard-Light";
`;

const Index = styled.div`
  width: 4px;
  height: 16px;

  margin-right: 8px;

  border-radius: 1px;
  background: ${(props) => props.color};
`;

export default MainSidebar;
