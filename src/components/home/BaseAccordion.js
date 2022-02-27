import styled from 'styled-components';
import { useRef, useState } from 'react';

import COLORS from '../../constants/colors';

const BaseAccordion = ({ title, list, handleSelectTemplate }) => {
  const parentRef = useRef(null);
  const childRef = useRef(null);

  const [isCollapse, setIsCollapse] = useState(false);

  const handleCollapse = () => {
    if (parentRef.current === null || childRef.current === null) {
      return;
    }

    if (parentRef.current.clientHeight > 0) {
      parentRef.current.style.height = '0px';
    } else if (parentRef.current.clientHeight === 0) {
      parentRef.current.style.height = `${childRef.current.clientHeight}px`;
    }
    setIsCollapse(!isCollapse);
  };

  return (
    <Wrapper>
      <GroupWrapper>
        <ItemWrapper onClick={handleCollapse}>
          <GroupTitle>{title}</GroupTitle>
          {isCollapse ? (
            <IconWrapper src={`${process.env.PUBLIC_URL}/img/collapse.svg`} />
          ) : (
            <IconWrapper src={`${process.env.PUBLIC_URL}/img/expand.svg`} />
          )}
        </ItemWrapper>
      </GroupWrapper>

      <ListWrapper ref={parentRef}>
        <ListItem ref={childRef}>
          {list.map(({ templateId, title }, i) => (
            <TemplateName
              key={'ii' + i}
              id={templateId}
              onClick={handleSelectTemplate}
            >
              {title}
            </TemplateName>
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
  width: 26px;
  height: 17px;

  font-size: 14px;

  display: flex;
  align-items: center;

  color: ${COLORS.UIWhite};
`;

const ListWrapper = styled.div`
  width: 200px;
  height: 0px;
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
  height: 17px;

  margin-top: 10px;
  margin-left: 8px;

  font-size: 14px;
  font-weight: 200;
  color: ${COLORS.UIWhite};

  &:hover {
    cursor: pointer;
  }
`;

export default BaseAccordion;
