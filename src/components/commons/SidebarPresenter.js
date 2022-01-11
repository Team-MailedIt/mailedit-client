import styled from "styled-components";
import COLORS from "../../constants/colors";
import logo from "../../constants/icons/logo.svg";
import search from "../../constants/icons/search.svg";
import remove from "../../constants/icons/remove.svg";

import { useState } from "react";

const SidebarPresenter = ({ myTemplateList, baseTemplateList }) => {
  const lists = [
    { id: 1, title: "템플릿1" },
    { id: 2, title: "템플릿2" },
    { id: 3, title: "템플릿3" },
    { id: 4, title: "템플릿4" },
    { id: 5, title: "템플릿5" },
    { id: 6, title: "템플릿6" },
    { id: 7, title: "템플릿7" },
    { id: 8, title: "템플릿8" },
    { id: 9, title: "템플릿9" },
    { id: 10, title: "템플릿10" },
    { id: 11, title: "템플릿11" },
    { id: 12, title: "템플릿12" },
    { id: 13, title: "템플릿13" },
  ];

  const [inputText, setInputText] = useState("");

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  // 템플릿 검색
  const results = lists.filter((l) => inputText && l.title.includes(inputText));

  const handleRemoveBtnClick = () => {
    setInputText("");
  };

  return (
    <Wrapper>
      <FixedSection>
        <Logo src={logo} />
        <SearchingField>
          <SearchIcon src={search} />
          <Input
            placeholder="템플릿을 검색하세요"
            spellCheck={false}
            value={inputText}
            onChange={handleInputChange}
          />
          {inputText && (
            <RemoveIcon src={remove} onClick={handleRemoveBtnClick} />
          )}
        </SearchingField>
        {results.length != 0 ? (
          <SearchResultWrapper>
            {results.map((r, i) => (
              <SearchResultTitle key={"r" + i}>{r.title}</SearchResultTitle>
            ))}
          </SearchResultWrapper>
        ) : null}
      </FixedSection>

      <MovableSection>
        <MyTemplate>마이템플릿</MyTemplate>
        {myTemplateList}
        {baseTemplateList}
      </MovableSection>
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
`;

const MovableSection = styled.div`
  width: 100%;
  height: 872px;
  overflow: scroll;

  &::-webkit-scrollbar {
    height: 100%;
    width: 29px;
  }

  &:hover {
    &::-webkit-scrollbar {
      height: 100%;
      width: 29px;
    }
    &::-webkit-scrollbar-thumb {
      background: ${COLORS.indigo1};
      background-clip: padding-box;
      border-radius: 20px;
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

const SearchResultWrapper = styled.div`
  width: 252px;
  background: ${COLORS.indigo4};

  position: relative;
  z-index: 2;

  margin-left: 40px;

  padding-bottom: 9px;
  border-radius: 0 0 2px 2px;
  border-top: 1px solid ${COLORS.UIWhite};

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchResultTitle = styled.div`
  width: 228px;
  height: 25px;

  display: flex;
  align-items: center;
  font-size: 14px;

  margin-top: 9px;
  padding-left: 8px;

  border-radius: 2px;

  &:hover {
    background: ${COLORS.indigo1};
    cursor: pointer;
  }
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

const RemoveIcon = styled.img`
  width: 12px;
  height: 12px;

  margin-left: 14px;

  &:hover {
    cursor: pointer;
  }
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

export default SidebarPresenter;
