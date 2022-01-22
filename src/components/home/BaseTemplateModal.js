import styled from "styled-components";
import ReactModal from "react-modal";
import { useEffect, useState } from "react";
import COLORS from "../../constants/colors";
import BaseAccordion from "./BaseAccordion";

const BaseTemplateModal = ({
  isModalOpen,
  setIsModalOpen,
  selectedBaseId,
  baseTemplates,
  baseCompany,
  baseSchool,
}) => {
  const [selectedId, setSelectedId] = useState(selectedBaseId);

  useEffect(() => setSelectedId(selectedBaseId), [selectedBaseId]);

  const handleSelectTemplate = (e) => {
    setSelectedId(e.target.id);
  };

  const selectedTemplate =
    selectedId && baseTemplates.filter((t) => t.templateId === selectedId);

  const modalStyle = {
    overlay: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(0,0,0,0.65)",
      zIndex: 10,
    },
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={() => setIsModalOpen(false)}
      ariaHideApp={false}
      style={modalStyle}
    >
      <Main>
        <MainWrapper>
          {selectedId && (
            <>
              <Title>{selectedTemplate[0].title}</Title>
              <Subtitle>{selectedTemplate[0].subtitle}</Subtitle>
              <Border />
              <Content>
                {selectedTemplate[0].content.map((t, i) => (
                  <BlockWrapper key={"ttt" + i}>
                    {t.html.replaceAll("<div>", "\n").replaceAll("</div>", "")}
                  </BlockWrapper>
                ))}
              </Content>
            </>
          )}
          <Description>
            회의 일정은 회사 내에서 회의 내용에 대한 공지를 드릴 때에
            사용됩니다.
          </Description>
        </MainWrapper>
      </Main>
      <Sidebar>
        <ScrollArea>
          <BaseAccordion
            title="회사"
            list={baseCompany}
            handleSelectTemplate={handleSelectTemplate}
          />
          <BaseAccordion
            title="학교"
            list={baseSchool}
            handleSelectTemplate={handleSelectTemplate}
          />
        </ScrollArea>
        <UseBtn>템플릿 사용하기</UseBtn>
      </Sidebar>
    </Modal>
  );
};

const Modal = styled(ReactModal)`
  width: 1040px;
  height: 600px;

  background: ${COLORS.UIWhite};

  box-shadow: 0px 3.34333px 10.03px rgba(0, 0, 0, 0.1);
  border-radius: 4px;

  display: grid;
  grid-template-columns: 0.75fr 0.25fr;
  display: flex;
  flex-direction: row;

  &:focus {
    outline: none;
  }
`;

const Main = styled.main`
  width: 780px;
  height: 600px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Sidebar = styled.aside`
  width: 260px;
  height: 600px;

  background: ${COLORS.primary};
  color: ${COLORS.UIWhite};
`;

const MainWrapper = styled.div`
  width: 680px;
  height: 521px;
`;

const Title = styled.div`
  width: 680px;
  height: 24px;

  font-size: 20px;
  line-height: 24px;

  display: flex;
  align-items: center;

  font-family: "Pretendard-SemiBold";

  color: ${COLORS.UIBlack};
`;

const Subtitle = styled.div`
  width: 680px;
  hegith: 19px;

  font-size: 16px;
  line-height: 19px;

  display: flex;
  align-items: center;

  margin-top: 24px;

  font-family: "Pretendard-Medium";

  color: ${COLORS.UIBlack};
`;

const Border = styled.div`
  width: 680px;
  height: 1px;

  margin-top: 20px;

  background: ${COLORS.gray4};
`;

const Content = styled.div`
  width: 680px;
  height: 368px;

  margin-top: 16px;

  overflow: auto;
  overflow-x: hidden;
`;

const Description = styled.div`
  width: 676px;
  height: 21px;

  font-size: 14px;
  line-height: 17px;

  margin-top: 28px;

  color: ${COLORS.primary};
`;

const ScrollArea = styled.div`
  width: 226px;
  height: 466px;

  margin-top: 40px;
  margin-left: 28px;

  overflow: auto;
`;

const UseBtn = styled.button`
  width: 200px;
  height: 32px;

  margin-top: 20px;
  margin-left: 32px;

  background: ${COLORS.gray1};
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
  border-radius: 4px;

  color: ${COLORS.primary};
  border: none;

  font-size: 14px;
  line-height: 17px;
  font-family: "Pretendard-SemiBold";
`;

const BlockWrapper = styled.div`
  width: 680px;
  white-space: pre-wrap;

  font-size: 14px;
  line-height: 24px;

  color: ${COLORS.UIBlack};

  & + & {
    margin-top: 28px; //32
  }
`;
export default BaseTemplateModal;
