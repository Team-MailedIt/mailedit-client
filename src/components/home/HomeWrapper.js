import styled from "styled-components";
import { Link } from "react-router-dom";
import COLORS from "../../constants/colors";
import Thumbnail from "../commons/Thumbnail";

const HomeWrapper = () => {
  return (
    <Wrapper>
      <Top>
        <Hello>
          안녕하세요 주현님, 오늘도 이메일 작성의 고수가 되어 보세요!
        </Hello>
        <TopRight>
          <LogOut>로그아웃</LogOut>
          <Link to={"/workspace"}>
            <GoToWorkSpace>템플릿 만들기</GoToWorkSpace>
          </Link>
        </TopRight>
      </Top>
      <MyTemplateArea>
        <MyTemplateInfo>
          <UserName>김주현님의 마이템플릿</UserName>
          <NumberArea>
            <Text>저장된 템플릿</Text>
            <TemplateNum>18개</TemplateNum>
          </NumberArea>
        </MyTemplateInfo>
        <Border />
        <MyTemplateContainer>
          <Thumbnail />
        </MyTemplateContainer>
      </MyTemplateArea>
      <BaseTemplateArea></BaseTemplateArea>
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

  display: flex;
  flex-direction: row;

  overflow: scroll;
  background: pink;
`;

const BaseTemplateArea = styled.section`
  width: 1516px;
  height: 240px;

  background: powderblue;
  margin: 40px 40px 0px 40px;
`;

export default HomeWrapper;
