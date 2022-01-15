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

  const handleCheckBoxClick = (e) => {
    console.log("id: ", e.target.id);
  };

  // dummy data
  const [groups, setGroups] = useState([
    {
      userId: 6,
      id: 112,
      name: "학교",
      color: "#38D9A9",
    },
    {
      userId: 6,
      id: 113,
      name: "회사",
      color: "#FFEC99",
    },
    {
      userId: 6,
      id: 114,
      name: "외주",
      color: "#FA5252",
    },
    {
      userId: 6,
      id: 115,
      name: "그룹1",
      color: "#BE4BDB",
    },
    {
      userId: 6,
      id: 116,
      name: "그룹2",
      color: "#66D9E8",
    },
    {
      userId: 6,
      id: 117,
      name: "그룹3",
      color: "#3138FF",
    },
  ]);

  return (
    <SidebarPresenter
      myTemplateList={
        <>
          {groups ? (
            <>
              <GroupWrapper>
                <SidebarGroup
                  title={"즐겨찾기"}
                  icon={<StarIcon src={star} />}
                  item={
                    <Checkbox
                      id={"likeCheckBox"}
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
              </GroupWrapper>
              <Border />
              <SelectAllWrapper>
                <SelectAll>전체 선택</SelectAll>
                <Checkbox
                  id={"sellectAllCheckBox"}
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
              <GroupWrapper>
                {groups.map((group, i) => (
                  <SidebarGroup
                    key={"g" + i}
                    title={group.name}
                    icon={<Index color={group.color} />}
                    item={
                      <Checkbox
                        id={group.id}
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
              </GroupWrapper>
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

const Border = styled.div`
  width: 246px;
  height: 0.5px;
  margin: 16px 0px 16px 36px;

  border: none;
  background-color: rgba(255, 255, 255, 0.25);
`;

const SelectAllWrapper = styled.div`
  width: 252px;
  height: 24px;

  margin: 21px 0px 0px 34px;

  display: flex;
  flex-direction: row;

  &:hover {
    cursor: pointer;
  }
`;

const SelectAll = styled.span`
  width: 60px;
  height: 20px;
  margin: 2px 164px 2px 4px;

  font-size: 16px;

  color: ${COLORS.UIWhite};
`;

const GroupWrapper = styled.div`
  width: 252px;
  margin-left: 34px;
`;

const CheckBoxWrapper = styled.div`
  display: flex;
  background: #ffffff;
`;

const CheckIcon = styled.img`
  width: 16px;
  height: 16px;
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

const Index = styled.div`
  width: 4px;
  height: 16px;

  border-radius: 1px;
  background: ${(props) => props.color};
`;

export default MainSidebar;
