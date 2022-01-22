import styled from "styled-components";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import COLORS from "../../constants/colors";
import Thumbnail from "./Thumbnail";
import API from "../../utils/API";

import mainSchIllu from "../../constants/icons/mainSchIllu.svg";
import mainComIllu from "../../constants/icons/mainComIllu.svg";

import noTemplateIllu from "../../constants/icons/noTemplateIllu.svg";

import dots from "../../constants/icons/dots.svg";
import unfold from "../../constants/icons/unfold.svg";

import { useEffect, useState } from "react";
import BaseTemplateModal from "./BaseTemplateModal";

const HomeContainer = () => {
  const userName = localStorage.getItem("userName");
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [myTemplates, setMyTemplates] = useState([]);
  const [baseTemplates, setBaseTemplates] = useState([]);
  const [option, setOption] = useState("company");
  const [selectedBaseId, setSelectedBaseId] = useState(null);

  useEffect(() => {
    API.get("/templates/my").then((res) => {
      setMyTemplates(res.data);
    });

    API.get("/templates/base").then((res) => {
      setBaseTemplates(res.data);
    });
  }, []);

  const baseCompany = baseTemplates.filter((base) => base.category === "회사");
  const baseSchool = baseTemplates.filter((base) => base.category === "학교");

  const handleSignOutBtnClick = () => {
    localStorage.clear();
    navigate("/");
  };

  const handleBinIconClick = (e) => {
    API.delete(`/templates/${e.target.id}`).then(() => {
      API.get("/templates/my").then((res) => {
        setMyTemplates(res.data);
      });
    });
  };

  const handleChangeSelect = (e) => {
    setOption(e.target.value);
  };

  const handleBaseClick = (e) => {
    setSelectedBaseId(e.target.id);
    setIsModalOpen(!isModalOpen);
  };

  const handleDotBtnClick = () => {
    setSelectedBaseId(baseCompany[0].templateId);
    setIsModalOpen(!isModalOpen);
  };

  return (
    <Wrapper>
      <Top>
        <Hello>
          {`안녕하세요 ${userName}님, 오늘도 이메일 작성의 고수가 되어 보세요!`}
        </Hello>
        <TopRight>
          <LogOut onClick={handleSignOutBtnClick}>로그아웃</LogOut>
          <Link to={"/workspace"}>
            <GoToWorkSpace>템플릿 만들기</GoToWorkSpace>
          </Link>
        </TopRight>
      </Top>

      <MyTemplateArea>
        <MyTemplateInfo>
          <UserName>{`${userName}님의 마이템플릿`}</UserName>
          <NumberArea>
            <Text>저장된 템플릿</Text>
            <TemplateNum>{`${myTemplates.length}개`}</TemplateNum>
          </NumberArea>
        </MyTemplateInfo>
        <Border />
        <MyTemplateGridWrapper>
          {myTemplates ? (
            <MyTemplateGrid>
              {myTemplates.map((t) => (
                <Thumbnail
                  key={t.createdAt}
                  id={t.templateId}
                  title={t.title}
                  subtitle={t.subtitle}
                  isStar={t.isStar}
                  groupId={t.groupId}
                  groupColor={t.group.color}
                  updatedAt={t.updatedAt.replace("T", " ").substring(0, 19)}
                  handleBinIconClick={handleBinIconClick}
                />
              ))}
            </MyTemplateGrid>
          ) : (
            <NoTemplateWrapper>
              <NoTemplateIllust src={noTemplateIllu} />
              <NoTemplateText>
                앗 아직 나의 템플릿이 없어요!
                <br />
                <b>첫 템플릿</b>을 만들어 보세요
              </NoTemplateText>
            </NoTemplateWrapper>
          )}
        </MyTemplateGridWrapper>
      </MyTemplateArea>

      <BaseTemplateArea>
        <TextWrapper>
          <TitleSelect>
            <BottomTitle>
              학교에서 교수님, 조교님께 어떻게 보내나요?
            </BottomTitle>
            <DropDown onChange={handleChangeSelect} value={option}>
              회사
              <option value="company">회사</option>
              <option value="school">학교</option>
            </DropDown>
          </TitleSelect>
          <BottomSubTitle>
            MailedIt에서 제공하는 기본 템플릿을 사용해 이메일 작성 효율을 좀 더
            높여 보세요.
          </BottomSubTitle>
          <BaseTemplateTable>
            <tbody>
              <tr>
                {option === "company"
                  ? baseCompany.slice(0, 5).map((t, i) => (
                      <th
                        id={t.templateId}
                        key={"b" + i}
                        onClick={handleBaseClick}
                      >
                        {t.title}
                      </th>
                    ))
                  : baseSchool.slice(0, 5).map((t, i) => (
                      <th
                        id={t.templateId}
                        key={"b" + i}
                        onClick={handleBaseClick}
                      >
                        {t.title}
                      </th>
                    ))}
                <th onClick={handleDotBtnClick}>
                  <Dots src={dots} />
                </th>
              </tr>
            </tbody>
          </BaseTemplateTable>
          {selectedBaseId && (
            <BaseTemplateModal
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              baseTemplates={baseTemplates}
              selectedBaseId={selectedBaseId}
            />
          )}
        </TextWrapper>
        {option === "company" ? (
          <Illustration src={mainComIllu} />
        ) : (
          <Illustration src={mainSchIllu} />
        )}
      </BaseTemplateArea>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  width: 1592px;

  display: flex;
  flex-direction: column;
`;

const Top = styled.header`
  width: 1512px;
  height: 120px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin: 48px 40px 0px 40px;
`;

const Hello = styled.div`
  height: 24px;

  font-weight: 600;
  font-size: 20px;

  margin-top: 88px;

  color: ${COLORS.primary};
`;

const TopRight = styled.div`
  width: 274px;
  height: 120px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const LogOut = styled.span`
  margin-left: 218px;

  font-weight: normal;
  font-size: 16px;
  color: ${COLORS.gray7};

  &:hover {
    cursor: pointer;
  }
`;

const GoToWorkSpace = styled.button`
  width: 274px;
  height: 46px;

  border: none;
  border-radius: 4px;

  color: ${COLORS.UIWhite};
  background: ${COLORS.primary};
`;

const MyTemplateArea = styled.section`
  width: 1512px;
  height: 568px;

  margin: 36px 40px 0px 40px;
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${COLORS.bgBlue};
`;

const MyTemplateInfo = styled.div`
  width: 1444px;
  height: 89.25px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Border = styled.div`
  width: 1472px;
  height: 1.5px;

  margin-left: 22px;
  margin-bottom: 1px;

  background: ${COLORS.gray4};
`;

const UserName = styled.span`
  height: 34px;

  font-family: Pretendard-SemiBold;
  font-weight: 700;
  font-size: 28px;

  display: flex;
  align-items: center;

  margin-top: 36px;
  margin-bottom: 20px;

  color: ${COLORS.gray8};
`;

const NumberArea = styled.div`
  width: 160px;
  height: 20px;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  margin-top: 44px;
`;

const Text = styled.div`
  height: 20px;

  font-weight: normal;
  font-size: 16px;
`;

const TemplateNum = styled.div`
  margin-left: 8px;
  color: ${COLORS.primary};

  text-decoration: underline;
`;

const MyTemplateGridWrapper = styled.div`
  width: 100%; // 1512px

  overflow: auto;

  display: flex;
  justify-content: center;
`;

const MyTemplateGrid = styled.div`
  width: 1440px;

  padding: 0px 0px 40px 10px;
  overflow: auto;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;

  &::-webkit-scrollbar {
    width: 24px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${COLORS.primary};
    background-clip: padding-box;

    border-radius: 20px;
    border: 10px solid transparent;
  }
`;

const BaseTemplateArea = styled.section`
  width: 1516px;
  height: 240px;

  margin: 40px 40px 0px 40px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Illustration = styled.img`
  width: 360px;
  height: 240px;
`;

const TextWrapper = styled.div`
  width: 1128px;
  height: 176px;

  display: flex;
  flex-direction: column;
`;

const TitleSelect = styled.div`
  width: 1124px;
  height: 40px;

  margin-top: 20px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const BottomTitle = styled.div`
  width: 488px;
  height: 34px;

  font-family: Pretendard-SemiBold;
  font-size: 28px;

  color: ${COLORS.UIBlack};

  display: flex;
  align-items: center;
`;

const BottomSubTitle = styled.div`
  width: 521px;
  height: 19px;

  margin-top: 12px;

  font-size: 16px;

  color: ${COLORS.UIBlack};
`;

const DropDown = styled.select`
  width: 128px;
  height: 36px;

  padding-left: 16px;

  border: 1.5px solid ${COLORS.gray2};
  border-radius: 4px;

  -o-appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

const BaseTemplateTable = styled.table`
  width: 1124px;
  height: 80px;

  border: 1.5px solid ${COLORS.indigo2};
  border-collapse: collapse;
  text-align: center;
  margin: 35px 1.5px 0px 1.5px;

  border-radius: 4px;
  border-style: hidden;
  box-shadow: 0 0 0 1px ${COLORS.indigo2};

  tr,
  th {
    border: 1.5px solid ${COLORS.indigo2};
    border-collapse: collapse;
    font-size: 18px;

    width: 188px;
    height: 80px;

    &:hover {
      cursor: pointer;
    }
  }
`;

const Dots = styled.img`
  width: 31px;
  height: 5px;
`;

const NoTemplateWrapper = styled.div`
  width: 360px;
  height: 389px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 44px;
`;

const NoTemplateIllust = styled.img`
  width: 360px;
  height: 309px;
`;

const NoTemplateText = styled.div`
  width: 233px;
  height: 60px;

  font-size: 20px;
  line-height: 140%;

  text-align: center;
  margin-top: 20px;
`;
export default HomeContainer;
