import styled from "styled-components";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import COLORS from "../../constants/colors";
import Thumbnail from "./Thumbnail";
import API from "../../utils/API";

import mainComIllu from "../../constants/icons/mainComIllu.svg";
import mainSchIllu from "../../constants/icons/mainSchIllu.svg";
import dots from "../../constants/icons/dots.svg";
import unfold from "../../constants/icons/unfold.svg";
import { useEffect, useState } from "react";

const HomePresenter = () => {
  const user = JSON.parse(localStorage.getItem("userData"));

  const [myTemplates, setMyTemplates] = useState([]);
  const [baseTemplates, setBaseTemplates] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    API.get("/templates/my").then((res) => {
      setMyTemplates(res.data);
      console.log(res.data);
    });

    API.get("/templates/base").then((res) => {
      setBaseTemplates(res.data);
      console.log("base: ", res.data);
    });
  }, []);

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

  const handleBaseClick = (e) => {
    console.log(e.target);
  };

  return (
    <Wrapper>
      <Top>
        <Hello>
          {`안녕하세요 ${user.givenName}님, 오늘도 이메일 작성의 고수가 되어 보세요!`}
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
          <UserName>{`${user.givenName}님의 마이템플릿`}</UserName>
          <NumberArea>
            <Text>저장된 템플릿</Text>
            <TemplateNum>{`${myTemplates.length}개`}</TemplateNum>
          </NumberArea>
        </MyTemplateInfo>
        <Border />
        <MyTemplateContainer>
          {myTemplates &&
            myTemplates.map((t) => (
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
        </MyTemplateContainer>
      </MyTemplateArea>
      <BaseTemplateArea>
        <TextWrapper>
          <TitleSelect>
            <BottomTitle>
              학교에서 교수님, 조교님께 어떻게 보내나요?
            </BottomTitle>
            <DropDown>
              학교
              <option value="school">학교</option>
              <option value="company">회사</option>
            </DropDown>
          </TitleSelect>
          <BottomSubTitle>
            MailedIt에서 제공하는 기본 템플릿을 사용해 이메일 작성 효율을 좀 더
            높여 보세요.
          </BottomSubTitle>
          <BaseTemplateTable>
            <tbody>
              <tr>
                {baseTemplates.slice(0, 5).map((t, i) => (
                  <th key={"b" + i} onClick={handleBaseClick}>
                    {t.title}
                  </th>
                ))}
                {/* <th>회의 일정 공지</th>
                <th>회의 일정 조율</th>
                <th>추가 자료 요청</th>
                <th>요청 자료 전달</th>
                <th>문서 제출</th> */}
                <th>
                  <Dots src={dots} />
                </th>
              </tr>
            </tbody>
          </BaseTemplateTable>
        </TextWrapper>
        <Illustration src={mainSchIllu} />
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
  widht: 1512px;
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

const MyTemplateContainer = styled.div`
  width: 100%;
  height: 477.25px;

  padding-top: 2px;
  padding-bottom: 40px;

  display: flex;
  justify-content: space-evenly;
  flex-flow: row wrap;
  overflow: auto;

  &::-webkit-scrollbar {
    height: 100%;
    width: 30px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${COLORS.primary};
    background-clip: padding-box;
    border-radius: 20px;
    border: 13px solid transparent;
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
  width: 520px;
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

  background-image: url(${unfold});
  background-repeat: no-repeat;

  background-size: 16px 10px;
  background-color: ${COLORS.UIWhite};

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
export default HomePresenter;
