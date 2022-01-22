import styled from "styled-components";
import { useRef, useState } from "react";

import expand from "../../constants/icons/expand.svg";
import collapse from "../../constants/icons/collapse.svg";
import COLORS from "../../constants/colors";

const BaseAccordion = ({ title, list }) => {
  const parentRef = useRef(null);
  const childRef = useRef(null);

  const [isCollapse, setIsCollapse] = useState(false);

  const handleButtonClick = () => {
    if (parentRef.current === null || childRef.current === null) {
      return;
    }
    if (parentRef.current.clientHeight > 0) {
      parentRef.current.style.height = "0";
    } else {
      parentRef.current.style.height = `${childRef.current.clientHeight}px`;
    }
    setIsCollapse(!isCollapse);
  };

  const parentRefHeight = parentRef.current?.style.height ?? "0px";
  const buttonIcon =
    parentRefHeight === "0px" ? (
      <IconWrapper src={expand} />
    ) : (
      <IconWrapper src={collapse} />
    );

  return (
    <Wrapper>
      <GroupWrapper>
        <ItemWrapper onClick={handleButtonClick}>
          <GroupTitle>{title}</GroupTitle>
          {buttonIcon}
        </ItemWrapper>
      </GroupWrapper>
      <ListWrapper ref={parentRef}>
        <ListItem ref={childRef}>
          {list.map((item, i) => (
            <TemplateName key={"ii" + i}>{item.title}</TemplateName>
          ))}
        </ListItem>
      </ListWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 200px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-bottom: 16px;
`;

const GroupWrapper = styled.section`
  width: 200px;
  height: 26px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 8px;

  border-bottom: 1px solid rgba(255, 255, 255, 0.5);

  &:hover {
    cursor: pointer;
  }
`;

const ItemWrapper = styled.div`
  width: 193px;
  height: 17px;

  margin-bottom: 8px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const IconWrapper = styled.img`
  width: 16px;
  height: 8px;

  &:hover {
    cursor: pointer;
  }
`;

const GroupTitle = styled.div`
  width: 25px;
  height: 17px;

  font-size: 14px;
  line-height: 17px;

  display: flex;
  align-items: center;

  color: ${COLORS.UIWhite};
`;

const ListWrapper = styled.div`
  width: 200px;
  overflow: hidden;

  transition: height 0.35s ease, background 0.35s ease;
`;

const ListItem = styled.div`
  padding: 0.1px;
  color: #ffffff;

  &:hover {
    cursor: pointer;
  }
`;

const TemplateName = styled.div`
  width: 200px;
  height: 12px;

  margin-top: 10px;
  margin-left: 8px;

  font-size: 10px;
  line-height: 12px;

  color: ${COLORS.UIWhite};

  &:hover {
    cursor: pointer;
  }
`;

export default BaseAccordion;
