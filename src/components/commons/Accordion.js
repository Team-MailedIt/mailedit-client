import { useRef, useState } from "react";
import styled from "styled-components";
import expand from "../../constants/icons/expand.svg";
import collapse from "../../constants/icons/collapse.svg";
import SidebarGroup from "./SidebarGroup";

const Accordion = ({ icon, title, list }) => {
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
    <Container>
      <SidebarGroup
        item={buttonIcon}
        title={title}
        onClick={handleButtonClick}
        icon={icon}
      />
      <ListWrapper ref={parentRef}>
        <ListItem ref={childRef}>
          {list.map((item, i) => (
            <TemplateTitle key={"i" + i}>
              <TemplateName>{item.title}</TemplateName>
            </TemplateTitle>
          ))}
        </ListItem>
      </ListWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 252px;

  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;

  margin-left: 40px;
`;

const IconWrapper = styled.img`
  width: 16px;
  height: 12px;

  margin: 6px 8px 6px 0px;
`;

const ListWrapper = styled.div`
  width: 252px;
  overflow: hidden;
  transition: height 0.35s ease, background 0.35s ease;
`;

const ListItem = styled.div`
  padding: 0.1px;
  color: #ffffff;
`;

const TemplateTitle = styled.div`
  width: 252px;
  height: 24px;

  display: flex;
  align-items: center;

  margin: 8px 40px 0px 0px;
`;

const TemplateName = styled.div`
  width: 160px;
  height: 20px;
  margin-left: 16px;
`;

export default Accordion;
