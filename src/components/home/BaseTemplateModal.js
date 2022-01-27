import { useContext } from "react";
import ReactModal from "react-modal";
import styled from "styled-components";
import { useNavigate } from "react-router";

import COLORS from "../../constants/colors";
import BaseAccordion from "./BaseAccordion";

import { SelectTemplateContext } from "../../contexts/SelectTemplateContext";
import { ContentContext } from "../../contexts/ContentContext";
import { ModalStyle } from "../commons/ModalStyle";

const BaseTemplateModal = ({
  isModalOpen,
  setIsModalOpen,
  baseTemplates,
  baseCompany,
  baseSchool,
}) => {
  const navigate = useNavigate();
  const { setContentHandler } = useContext(ContentContext);
  const { selectedId, setSelectIdHandler } = useContext(SelectTemplateContext);

  const handleSelectTemplate = (e) => {
    setSelectIdHandler(e.target.id);
  };

  const selectedBase =
    selectedId && baseTemplates.filter((t) => t.templateId === selectedId);

  const handleUseTemplateBtnClick = () => {
    setContentHandler(selectedBase[0]);
    navigate("/workspace");
  };

  return (
    <>
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          ariaHideApp={false}
          style={ModalStyle}
        >
          <Main>
            <MainWrapper>
              {selectedId && (
                <>
                  <Title>{selectedBase[0].title}</Title>
                  <Subtitle>{selectedBase[0].subtitle}</Subtitle>
                  <Border />
                  <Content>
                    {selectedBase[0].content.map((t, i) => (
                      <BlockWrapper key={"ttt" + i}>
                        {t.html
                          .replaceAll("<div>", "\n")
                          .replaceAll("</div>", "")}
                      </BlockWrapper>
                    ))}
                  </Content>

                  <Description>{selectedBase[0].tip}</Description>
                </>
              )}
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
            <UseBtn onClick={handleUseTemplateBtnClick}>템플릿 사용하기</UseBtn>
          </Sidebar>
        </Modal>
      )}
    </>
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

  &::-webkit-scrollbar {
    width: 19px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${COLORS.indigo1};
    background-clip: padding-box;

    border-radius: 20px;
    border: 8.5px solid transparent;
  }
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
