import { useState } from "react";
import styled from "styled-components";
import Checkbox from "react-custom-checkbox";
import check from "../../constants/icons/check.svg";
import COLORS from "../../constants/colors";
import SidebarPresenter from "../commons/SidebarPresenter";
import star from "../../constants/icons/star.svg";
import SidebarGroup from "../commons/SidebarGroup";

const MainSidebar = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckBoxClick = () => {
    setIsChecked(!isChecked);
  };

  // dummy data
  const [groups, setGroups] = useState(null);

  return (
    <SidebarPresenter
      myTemplateList={
        <>
          {groups ? (
            <>
              <SidebarGroup
                title={"즐겨찾기"}
                icon={<StarIcon src={star} />}
                item={
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
              <Border />
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
              {groups.map((group) => (
                <SidebarGroup
                  title={group.name}
                  icon={<Index color={group.color} />}
                  item={
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
              ))}
            </>
          ) : (
            <NoTemplates>
              마이템플릿이 아직 없네요!
              <br />첫 템플릿을 만들어 보는 것은 어떨까요?
            </NoTemplates>
          )}
        </>
      }
    />
  );
};

const StarIcon = styled.img`
  width: 18px;
  height: 18px;
  margin: 3px 0px 3px 4px;
`;

const Border = styled.hr`
  width: 246px;
  height: 0.5px;
  margin: 16px 46px 16px 36px;

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

const Index = styled.div`
  width: 4px;
  height: 16px;

  border-radius: 1px;
  background: ${(props) => props.color};
`;

export default MainSidebar;
