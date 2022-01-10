import { useState } from "react";
import styled from "styled-components";
import Checkbox from "react-custom-checkbox";
import SidebarPresenter from "../commons/sidebar/SidebarPresenter";
import check from "../../constants/icons/check.svg";
import COLORS from "../../constants/colors";

const MainSidebar = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckBoxClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <SidebarPresenter
      item={
        <SelectAllWrapper>
          <SelectAll>전체 선택</SelectAll>
          <Checkbox
            checked={isChecked}
            icon={
              <CheckBoxWrapper>
                <CheckIcon src={check} />
              </CheckBoxWrapper>
            }
            borderColor="#FFFFFF"
            borderRadius="2px"
            borderWidth="1px"
            style={{ overflow: "hidden" }}
            size="16px"
            onClick={handleCheckBoxClick}
          />
        </SelectAllWrapper>
      }
      button={
        <Checkbox
          checked={isChecked}
          icon={
            <CheckBoxWrapper>
              <CheckIcon src={check} />
            </CheckBoxWrapper>
          }
          borderColor="#FFFFFF"
          borderRadius="2px"
          borderWidth="1px"
          style={{ overflow: "hidden" }}
          size="16px"
          onClick={handleCheckBoxClick}
        />
      }
    />
  );
};

const CheckBoxWrapper = styled.div`
  display: flex;
  background: #ffffff;
`;

const CheckIcon = styled.img`
  width: 16px;
  height: 16px;
`;

const SelectAll = styled.span`
  width: 60px;
  height: 20px;
  margin: 2px 164px 2px 4px;

  font-size: 16px;
  line-height: 19px;

  color: ${COLORS.UIWhite};
`;

const SelectAllWrapper = styled.div`
  width: 252px;
  height: 24px;

  margin: 21px 40px 0px 36px;

  display: flex;
  flex-direction: row;

  &:hover {
    cursor: pointer;
  }
`;

export default MainSidebar;
