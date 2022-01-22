import { useEffect, useState } from "react";
import styled from "styled-components";
import check from "../../constants/icons/check.svg";
import COLORS from "../../constants/colors";
import star from "../../constants/icons/star.svg";
import SidebarGroup from "../commons/SidebarGroup";
import Search from "../commons/Search";
import logo from "../../constants/icons/logo.svg";
import API from "../../utils/API";

const MainSidebar = () => {
  const [groups, setGroups] = useState([]);
  const [myTemplates, setMyTemplates] = useState([]);
  const [groupIdList, setGroupIdList] = useState([]);
  const [selectedGroupId, setSelectedGroupId] = useState([]);
  const [isChecked, setIsChecked] = useState([]);

  useEffect(() => {
    API.get("/groups").then((res) => {
      setGroups(res.data);
      res.data.map((group) =>
        setGroupIdList((selectedGroupId) => [...selectedGroupId, group.id])
      );
    });

    API.get("/templates/my").then((res) => {
      setMyTemplates(res.data);
    });
  }, []);

  const handleSelectAll = (e) => {
    setSelectedGroupId(e.target.checked ? groupIdList : []);
  };

  const handleSelectElement = (e, id) => {
    if (e.target.checked) {
      setSelectedGroupId([...selectedGroupId, id]);
    } else {
      setSelectedGroupId(
        selectedGroupId.filter((checkedId) => checkedId !== id)
      );
    }
  };

  return (
    <Wrapper>
      <FixedSection>
        <Logo src={logo} />
        <Search all={myTemplates} />
      </FixedSection>

      <VariableSection>
        <MyTemplate>마이템플릿</MyTemplate>
        {groups ? (
          <>
            <SidebarGroup
              title="즐겨찾기"
              icon={<StarIcon src={star} />}
              item={
                <input
                  id="likeß"
                  type="checkbox"
                  value={isChecked}
                  onChange={handleSelectElement}
                />
              }
            />
            <Border />
            <SidebarGroup
              title="전체 선택"
              item={
                <input
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
                  <input
                    id={group.id}
                    type="checkbox"
                    checked={selectedGroupId.includes(group.id)}
                    onChange={(e) => handleSelectElement(e, group.id)}
                  />
                }
              />
            ))}
          </>
        ) : (
          <NoTemplates>
            마이템플릿이 아직 없네요!
            <br />첫 템플릿을 만들어 보는 것은 어떨까요?
          </NoTemplates>
        )}
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
  font-weight: 300;
  line-height: 22px;
`;

const Index = styled.div`
  width: 4px;
  height: 16px;

  margin-right: 8px;

  border-radius: 1px;
  background: ${(props) => props.color};
`;

export default MainSidebar;
