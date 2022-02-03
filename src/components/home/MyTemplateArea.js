import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

import API from "../../utils/API";
import Thumbnail from "./Thumbnail";
import COLORS from "../../constants/colors";
import noTemplateIllu from "../../constants/icons/noTemplateIllu.svg";

import { AuthContext } from "../../contexts/AuthContext";
import { ContentContext } from "../../contexts/ContentContext";
import { FilterLikeContext } from "../../contexts/FilterLikeContext";
import { SelectGroupContext } from "../../contexts/SelectGroupContext";
import { SelectTemplateContext } from "../../contexts/SelectTemplateContext";

const MyTemplateArea = () => {
  const navigate = useNavigate();
  const userName = localStorage.getItem("userName");

  const [myTemplates, setMyTemplates] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const { isLogin } = useContext(AuthContext);
  const { likes } = useContext(FilterLikeContext);
  const { setContentHandler } = useContext(ContentContext);
  const { selectedGroupId } = useContext(SelectGroupContext);
  const { setSelectIdHandler } = useContext(SelectTemplateContext);

  useEffect(() => {
    isLogin &&
      API.get("/templates/my").then((res) => {
        setMyTemplates(res.data);
        setFiltered(res.data);
      });
  }, [isLogin]);

  // filtering my templates
  useEffect(() => {
    setFiltered(myTemplates.filter((t) => selectedGroupId.includes(t.groupId)));

    likes && setFiltered(myTemplates.filter((t) => t.isStar === true));
  }, [selectedGroupId, myTemplates, likes]);

  // delete template
  const handleBinIconClick = (e) => {
    API.delete(`/templates/${e.target.id}`).then(() => {
      API.get("/templates/my").then((res) => {
        setMyTemplates(res.data);
      });
    });
  };

  const handleThumbnailClick = (e) => {
    setSelectIdHandler(e.target.id);

    API.get(`/templates/${e.target.id}`).then((res) =>
      setContentHandler(res.data)
    );

    navigate("/workspace");
  };

  return (
    <Wrapper>
      <MyTemplateInfo>
        <UserName>
          {isLogin ? `${userName}님의 마이템플릿` : "마이템플릿"}
        </UserName>
        <NumberArea>
          <Text>저장된 템플릿</Text>
          <TemplateNum>{`${myTemplates.length}개`}</TemplateNum>
        </NumberArea>
      </MyTemplateInfo>
      <Border />

      {myTemplates.length === 0 ? (
        <NoTemplateWrapper>
          <NoTemplateIllust src={noTemplateIllu} />
          <NoTemplateText>
            앗 아직 나의 템플릿이 없어요!
            <br />
            <b>첫 템플릿</b>을 만들어 보세요
          </NoTemplateText>
        </NoTemplateWrapper>
      ) : (
        <>
          {filtered.length !== 0 ? (
            <>
              <MyTemplateGrid>
                {filtered.map((t) => (
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
                    handleThumbnailClick={handleThumbnailClick}
                    setMyTemplates={setMyTemplates}
                  />
                ))}
              </MyTemplateGrid>
              <VeilBottom />
            </>
          ) : (
            <NoTemplateWrapper>
              <NoTemplateIllust src={noTemplateIllu} />
              <SelectGroupText>
                왼쪽 사이드바에서
                <br />
                템플릿을 꺼내 보세요!
              </SelectGroupText>
            </NoTemplateWrapper>
          )}
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 1512px;
  height: 568px;

  margin: 36px 40px 0px 40px;
  border-radius: 4px;

  display: flex;
  flex-direction: column;

  background: ${COLORS.bgBlue};
`;

const MyTemplateInfo = styled.div`
  width: 1444px;
  height: 89.25px;

  margin-left: 40px;

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

  font-size: 28px;
  font-weight: 600;

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
  font-size: 16px;
`;

const TemplateNum = styled.div`
  margin-left: 8px;
  color: ${COLORS.primary};
`;

const MyTemplateGrid = styled.div`
  width: 1460px;

  padding: 24px 0px 4px 36px;

  overflow: auto;

  display: grid;
  justify-items: center;
  grid-template-columns: repeat(4, 1fr);

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${COLORS.primary};
    background-clip: padding-box;

    border-radius: 20px;
    border: 4px solid transparent;
  }
`;

const VeilBottom = styled.div`
  width: 1484px;
  height: 32px;

  position: relative;
  z-index: 2;

  background: ${COLORS.bgBlue};
`;

const NoTemplateWrapper = styled.div`
  width: 360px;
  height: 389px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 44px;
  margin-left: 548px;
`;

const NoTemplateIllust = styled.img`
  width: 360px;
  height: 309px;
`;

const NoTemplateText = styled.div`
  width: 234px;
  height: 60px;

  margin-top: 20px;
  margin-left: 48px;

  font-size: 20px;
  line-height: 140%;
  text-align: center;

  margin-top: 20px;
  margin-left: 48px;
`;

const SelectGroupText = styled.div`
  width: 173px;
  height: 60px;

  margin-top: 20px;
  margin-left: 80px;

  font-size: 20px;
  line-height: 140%;
  text-align: center;

  color: ${COLORS.UIBlack};
`;
export default MyTemplateArea;
