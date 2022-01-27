import styled from "styled-components";
import { useState, useContext, useEffect } from "react";

import API from "../../utils/API";
import COLORS from "../../constants/colors";
import BaseTemplateModal from "./BaseTemplateModal";

import dots from "../../constants/icons/dots.svg";
import mainSchIllu from "../../constants/icons/mainSchIllu.svg";
import mainComIllu from "../../constants/icons/mainComIllu.svg";

import { SelectTemplateContext } from "../../contexts/SelectTemplateContext";

const BaseTemplateArea = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [baseTemplates, setBaseTemplates] = useState([]);
  const [option, setOption] = useState("company");

  const { selectedId, setSelectIdHandler } = useContext(SelectTemplateContext);

  // get base templates
  useEffect(() => {
    API.get("/templates/base").then((res) => {
      setBaseTemplates(res.data);
    });
  }, []);

  // filtering base templates
  const baseCompany = baseTemplates.filter((base) => base.category === "회사");
  const baseSchool = baseTemplates.filter((base) => base.category === "학교");

  // change option
  const handleChangeSelect = (e) => {
    setOption(e.target.value);
  };

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
      <TextWrapper>
        <TitleSelect>
          <BottomTitle>
            {option === "company"
              ? "회사에서 일잘러가 되려면?"
              : "학교에서 교수님, 조교님께 어떻게 보내나요?"}
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
                      <ThText id={t.templateId} onClick={handleBaseClick}>
                        {t.title}
                      </ThText>
                    </th>
                  ))
                : baseSchool.slice(0, 5).map((t, i) => (
                    <th
                      id={t.templateId}
                      key={"b" + i}
                      onClick={handleBaseClick}
                    >
                      <ThText id={t.templateId} onClick={handleBaseClick}>
                        {t.title}
                      </ThText>
                    </th>
                  ))}

              <th onClick={handleDotBtnClick}>
                <Dots src={dots} />
              </th>
            </tr>
          </tbody>
        </BaseTemplateTable>
        {selectedId.length != 0 && (
          <BaseTemplateModal
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            baseTemplates={baseTemplates}
            baseCompany={baseCompany}
            baseSchool={baseSchool}
          />
        )}
      </TextWrapper>
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
  justify-content: space-between;
`;

const ThText = styled.div`
  width: 140px;
  height: 48px;

  margin-left: 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;
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

export default BaseTemplateArea;
