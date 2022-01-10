import { useRef, useState } from "react";
import styled from "styled-components";
import expand from "../../constants/icons/expand.svg";
import collapse from "../../constants/icons/collapse.svg";

const Accordion = ({ title, index, list }) => {
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
        <GroupIndex color={index} />
        <GroupName>{title}</GroupName>
        {buttonIcon}
      </Group>
      <ListWrapper ref={parentRef}>
        <List ref={childRef}>
          {list.map((item) => (
            <TemplateTitle>
              <TemplateName>{item}</TemplateName>
            </TemplateTitle>
          ))}
        </List>
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

const Group = styled.div`
  width: 100%;
  height: 24px;

  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin-top: 12px;
  height: 32px;
`;

const GroupName = styled.span`
  width: 160px;
  height: 20px;

  margin: 2px 52px 2px 8px;
  color: #ffffff;

  font-size: 16px;
  line-height: 19px;
`;

const IconWrapper = styled.img`
  width: 16px;
  height: 12px;

  margin: 6px 8px 6px 0px;
`;

const GroupIndex = styled.div`
  width: 4px;
  height: 16px;
  margin: 4px 0px 4px 4px;

  border-radius: 1px;
  background: ${(props) => props.color};
`;

const ListWrapper = styled.div`
  width: 252px;
  overflow: hidden;
  transition: height 0.35s ease, background 0.35s ease;
`;

const List = styled.div`
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
