import styled from "styled-components";
import COLORS from "../../constants/colors";

import search from "../../constants/icons/sidebar/search.svg";
import star from "../../constants/icons/sidebar/star.svg";

import logo from "../../constants/icons/sidebar/logo.svg";
import { useState } from "react";

const Sidebar = () => {
  const [groups, setGroups] = useState([
    {
      userId: 5,
      id: 1,
      name: "학교",
      color: "#3138FF",
    },
    {
      userId: 5,
      id: 2,
      name: "회사",
      color: "#E64980",
    },
    {
      userId: 5,
      id: 3,
      name: "그룹2",
      color: "#38D9A9",
    },
    {
      userId: 5,
      id: 4,
      name: "그룹3",
      color: "#FAB005",
    },
  ]);

  return (
    <Wrapper>
      <Logo src={logo} />
      <SearchingField>
        <SearchIcon src={search} />
        <Input placeholder="템플릿을 검색하세요" />
      </SearchingField>
      <MyTemplate>마이템플릿</MyTemplate>
      <Group>
        <StarIcon src={star} />
        <GroupName>즐겨찾기</GroupName>
      </Group>

      <Border />
      <SelectAll>전체선택</SelectAll>
      {groups.map((group) => (
        <Group key={group.id}>
          <GroupIndex color={group.color} />
          <GroupName>{group.name}</GroupName>
        </Group>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  width: 328px;
  height: 1080px;

  background: ${COLORS.primary};
`;

const Logo = styled.img`
  width: 220px;
  height: 44px;

  margin: 36px 68px 0 40px;
`;

const SearchingField = styled.section`
  width: 252px;
  height: 38px;

  display: flex;
  flex-direction: row;

  background: #748ffc;

  border-radius: 2px;
  margin: 48px 36px 0px 40px;
`;

const Input = styled.input`
  margin-left: 12px;

  background: none;
  border: none;
  &:focus {
    outline: none;
  }
  color: white;

  &::placeholder {
    color: ${COLORS.indigo1};
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
  }
`;

const SearchIcon = styled.img`
  width: 18px;
  heigt: 18px;

  margin: 10px 0px 10px 12px;
`;

const MyTemplate = styled.span`
  width: 96px;
  height: 26px;
  margin: 42px 192px 24px 40px;

  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 26px;

  display: flex;
  align-items: center;

  color: ${COLORS.UIWhite};
`;

const Group = styled.section`
  width: 252px;
  height: 24px;

  margin: 12px 40px 0 36px;

  display: flex;
  flex-direction: row;
  justify-contents: center;
`;

const StarIcon = styled.img`
  width: 18px;
  height: 18px;
  margin: 3px 0px 3px 4px;
`;

const GroupName = styled.span`
  height: 20px;
  margin: 2px 2px 0px 8px;

  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: ${COLORS.UIWhite};
`;

const SelectAll = styled.span`
  width: 56px;
  height: 20px;
  margin: 21px 0px 0px 40px;

  font-size: 16px;
  line-height: 19px;

  color: ${COLORS.UIWhite};
`;

const Border = styled.hr`
  width: 246px;
  height: 0.5px;
  margin: 16px 46px 22px 36px;
  border: none;
  background-color: rgba(255, 255, 255, 0.5);
`;

const GroupIndex = styled.div`
  width: 4px;
  height: 16px;
  margin: 4px 0px 4px 4px;

  border-radius: 1px;
  background: ${(props) => props.color};
`;

export default Sidebar;
