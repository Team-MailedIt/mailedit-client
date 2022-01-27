import { useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";

import COLORS from "../../constants/colors";
import { ContentContext } from "../../contexts/ContentContext";

const HeaderArea = () => {
  const navigate = useNavigate();
  const userName = localStorage.getItem("userName");
  const { setContentHandler } = useContext(ContentContext);

  // sign out
  const handleSignOutBtnClick = () => {
    localStorage.clear();
    navigate("/");
  };

  // go to workspace
  const handleGoToWorkspace = () => {
    setContentHandler(null);
    navigate("/workspace");
  };

  return (
    <Top>
      <Hello>
        {`안녕하세요 ${userName}님, 오늘도 이메일 작성의 고수가 되어 보세요!`}
      </Hello>
      <TopRight>
        <LogOut onClick={handleSignOutBtnClick}>로그아웃</LogOut>
        <GoToWorkSpace onClick={handleGoToWorkspace}>
          템플릿 만들기
        </GoToWorkSpace>
      </TopRight>
    </Top>
  );
};

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

export default HeaderArea;
