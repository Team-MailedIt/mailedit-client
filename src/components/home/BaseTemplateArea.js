import styled from "styled-components";
import { useState, useContext, useEffect } from "react";

import API from "../../utils/API";
import COLORS from "../../constants/colors";
import BaseTemplateModal from "./BaseTemplateModal";

import dots from "../../constants/icons/dots.svg";
import mainSchIllu from "../../constants/icons/mainSchIllu.svg";
import mainComIllu from "../../constants/icons/mainComIllu.svg";

import Select from "../commons/Select";
import { SelectTemplateContext } from "../../contexts/SelectTemplateContext";

const BaseTemplateArea = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [baseSchool, setBaseSchool] = useState([]);
  const [baseCompany, setBaseCompany] = useState([]);

  const [option, setOption] = useState("company");

  const { selectedId, setSelectIdHandler } = useContext(SelectTemplateContext);

  // get base templates
  useEffect(() => {
    const getBaseSchool = async () => {
      const { data } = await API.get("/templates/base?category=학교");
      setBaseSchool(data);
    };

    const getBaseCompany = async () => {
      const { data } = await API.get("/templates/base?category=회사");
      setBaseCompany(data);
    };

    getBaseSchool();
    getBaseCompany();
  }, []);

  // when clicking base template menu
  const handleBaseClick = (e) => {
    setSelectIdHandler(e.target.id);
    setIsModalOpen(!isModalOpen);
  };

  // when clicking etc button
  const handleDotBtnClick = () => {
    setSelectIdHandler(baseCompany[0].templateId);
    setIsModalOpen(!isModalOpen);
  };

  return (
    <Wrapper>
      <Contents>
        <TitleSelect>
          <BottomTitle>
            {option === "company"
              ? "회사에서 일잘러가 되려면?"
              : "학교에서 교수님, 조교님께 어떻게 보내나요?"}
          </BottomTitle>
          <Select option={option} setOption={setOption} />
        </TitleSelect>

        <BottomSubTitle>
          MailedIt에서 제공하는 기본 템플릿을 사용해 이메일 작성 효율을 좀 더
          높여 보세요.
        </BottomSubTitle>

        <BaseTemplateTable>
          {option === "company"
            ? baseCompany &&
              baseCompany.slice(0, 5).map((t, i) => (
                <Cell id={t.templateId} key={"b" + i} onClick={handleBaseClick}>
                  <ThText id={t.templateId} onClick={handleBaseClick}>
                    {t.title}
                  </ThText>
                </Cell>
              ))
            : baseSchool &&
              baseSchool.slice(0, 5).map((t, i) => (
                <Cell id={t.templateId} key={"b" + i} onClick={handleBaseClick}>
                  <ThText id={t.templateId} onClick={handleBaseClick}>
                    {t.title}
                  </ThText>
                </Cell>
              ))}

          <Cell onClick={handleDotBtnClick}>
            <ThText>
              <Dots src={dots} />
            </ThText>
          </Cell>
        </BaseTemplateTable>
        {selectedId.length !== 0 && (
          <BaseTemplateModal
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            baseTemplates={[...baseCompany, ...baseSchool]}
            baseCompany={baseCompany}
            baseSchool={baseSchool}
          />
        )}
      </Contents>
      {option === "company" ? (
        <Illustration src={mainComIllu} />
      ) : (
        <Illustration src={mainSchIllu} />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 1516px;
  height: 240px;

  margin: 40px 40px 0px 40px;

  display: flex;
  flex-direction: row;
`;

const ThText = styled.div`
  width: 140px;
  height: 48px;

  margin-left: 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 18px;
  line-height: 24px;
  word-break: keep-all;
`;

const Illustration = styled.img`
  width: 360px;
  height: 240px;
  margin-left: 28px;
`;

const Contents = styled.div`
  width: 1128px;

  display: flex;
  flex-direction: column;
`;

const TitleSelect = styled.div`
  width: 1124px;
  height: 40px;

  margin-top: 20px;

  display: flex;
  flex-direction: row;
`;

const BottomTitle = styled.div`
  width: 488px;
  height: 34px;

  font-size: 28px;
  font-weight: 600;

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

const BaseTemplateTable = styled.div`
  width: 1122px;
  height: 80px;

  margin: 35px 1.5px 0px 1.5px;

  border-radius: 4px;
  border: 1px solid ${COLORS.indigo2};

  display: flex;
  align-items: center;
`;

const Cell = styled.div`
  font-size: 18px;

  width: 187px;
  height: 80px;
  text-align: center;

  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
  }

  & + & {
    border-left: 1px solid ${COLORS.indigo2};
  }
`;

const Dots = styled.img`
  width: 31px;
  height: 5px;
`;

export default BaseTemplateArea;
