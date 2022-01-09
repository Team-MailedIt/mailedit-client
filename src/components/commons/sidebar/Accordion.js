import { useRef, useState } from "react";
import styled from "styled-components";
import expand from "./expand.svg";
import collapse from "./collapse.svg";

const Accordion = () => {
  const groups = [
    { title: "학교", templates: ["템플릿1", "템플릿2", "템플릿3"] },
    { title: "회사", templates: ["템플릿4", "템플릿5", "템플릿6"] },
  ];

  const parentRef = useRef(null);
  const childRef = useRef(null);
  const [isCollapse, setIsCollapse] = useState(false);

  const handleButtonClick = (event) => {
    event.stopPropagation();

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
    <Container>
      <Group onClick={handleButtonClick}>
        {groups.map((t) => t.title)}
        {buttonIcon}
      </Group>
      <ListWrapper ref={parentRef}>
        <List ref={childRef}>{groups.map((t) => t.templates)}</List>
      </ListWrapper>
    </Container>
  );
};

const IconWrapper = styled.img`
  width: 16px;
  height: 12px;
  background: pink;
`;

const Container = styled.div`
  width: 252px;

  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;

  border: 1px solid grey;
`;

const Group = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  height: 32px;
  margin: 0 32px 0 8px;
`;

const ListWrapper = styled.div`
  margin: 5px;
  padding: 0 8px;
  overflow: hidden;
  transition: height 0.35s ease, background 0.35s ease;
`;

const List = styled.div`
  padding: 0.1px;
`;

export default Accordion;
