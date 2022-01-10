import SidebarPresenter from "../commons/sidebar/SidebarPresenter";
import expand from "../../constants/icons/expand.svg";
import collapse from "../../constants/icons/collapse.svg";

import styled from "styled-components";
import { useRef, useState } from "react";

import COLORS from "../../constants/colors";

const WorkSpaceSidebar = () => {
  return <SidebarPresenter />;
};

const ExpandIconWrapper = styled.img`
  width: 16px;
  height: 12px;
`;

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
`;

const GroupName = styled.div`
  display: flex;
  height: 25px;
`;

const ContentWrapper = styled.div`
  height: 0;
  width: 252px;
  overflow: hidden;
  transition: height 0.3s ease;
`;

const Contents = styled.div`
  width: 252px;
  height: 24px;

  margin-bottom: 10px;
`;

export default WorkSpaceSidebar;
