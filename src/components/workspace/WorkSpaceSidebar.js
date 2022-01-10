import { useState } from "react";
import styled from "styled-components";
import Checkbox from "react-custom-checkbox";
import check from "../../constants/icons/check.svg";
import COLORS from "../../constants/colors";
import Accordion from "../commons/Accordion";
import logo from "../../constants/icons/logo.svg";
import search from "../../constants/icons/search.svg";
import star from "../../constants/icons/star.svg";

const WorkSpaceSidebar = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckBoxClick = () => {
    setIsChecked(!isChecked);
  };

  const groups = [
    {
      title: "학교",
      index: "#3138FF",
      templates: [
        "템플릿1",
        "템플릿2",
        "템플릿3",
        "템플릿4",
        "템플릿5",
        "템플릿6",
      ],
    },
    {
      title: "회사",
      index: "#E64980",
      templates: [
        "템플릿7",
        "템플릿8",
        "템플릿9",
        "템플릿10",
        "템플릿11",
        "템플릿12",
      ],
    },
  ];

  const fav = [
    "템플릿7",
    "템플릿8",
    "템플릿9",
    "템플릿10",
    "템플릿11",
    "템플릿12",
  ];
  return (
    <Wrapper>
      <NoScrollWrapper>
        <Logo src={logo} />
        <SearchingField>
          <SearchIcon src={search} />
          <Input placeholder="템플릿을 검색하세요" spellCheck={false} />
        </SearchingField>
      </NoScrollWrapper>
      <ScrollWrapper>
        <MyTemplate>마이템플릿</MyTemplate>
        <Accordion title={"즐겨찾기"} list={fav.map((t) => t)} />
        <Border />
        {groups ? (
          groups.map((group) => (
            <Accordion
              title={group.title}
              index={group.index}
              list={group.templates.map((template) => template)}
            />
          ))
        ) : (
          <NoTemplates>
            마이템플릿이 아직 없네요!
            <br />첫 템플릿을 만들어 보는 것은 어떨까요?
          </NoTemplates>
        )}
        <BaseTemplate>기본템플릿</BaseTemplate>

        {groups.map((group) => (
          <Accordion
            title={group.title}
            index={COLORS.indigo2}
            list={group.templates.map((template) => template)}
          />
        ))}
      </ScrollWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  width: 328px;
  height: 1080px;

  background: ${COLORS.primary};
`;

const NoScrollWrapper = styled.div`
  width: 100%;
  height: 208px;
`;

const ScrollWrapper = styled.div`
  width: 100%;
  height: 872px;
  overflow: scroll;

  &:hover {
    &::-webkit-scrollbar {
      height: 100%;
      width: 29px;
    }
    &::-webkit-scrollbar-thumb {
      background: ${COLORS.indigo1};
      background-clip: padding-box;
      border-radius: 15px;
      border: 13px solid transparent;
    }
  }
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
  align-items: center;

  background: #748ffc;

  border-radius: 2px;
  margin: 48px 36px 0px 40px;
`;

const Input = styled.input`
  margin-left: 12px;

  background: none;
  border: none;
  color: white;

  &::placeholder {
    color: ${COLORS.indigo1};
    font-size: 16px;
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
  margin: 0px 192px 24px 40px;

  font-weight: 600;
  font-size: 22px;
  line-height: 26px;

  display: flex;
  align-items: center;

  color: ${COLORS.UIWhite};
`;

const BaseTemplate = styled.span`
  width: 96px;
  height: 26px;
  margin: 42px 192px 8px 40px;

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
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

const StarIcon = styled.img`
  width: 18px;
  height: 18px;
  margin: 3px 0px 3px 4px;
`;

const GroupName = styled.span`
  width: 160px;
  height: 20px;
  margin: 2px 52px 0px 8px;

  font-size: 16px;
  line-height: 19px;

  color: ${COLORS.UIWhite};
`;

const Border = styled.hr`
  width: 246px;
  height: 0.5px;
  margin: 16px 46px 4px 36px;
  border: none;
  background-color: rgba(255, 255, 255, 0.25);
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

export default WorkSpaceSidebar;
