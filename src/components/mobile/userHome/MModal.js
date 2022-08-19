import ReactModal from 'react-modal';
import styled from 'styled-components';
import { colors } from '../../../constants/colors';
import template from '../../../constants/template.json';
import { ModalStyle } from '../../commons/ModalStyle';

export default function MModal({ isModalOpen, setIsModalOpen }) {
  return (
    <>
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          ariaHideApp={false}
          style={ModalStyle}
        >
          <Top>
            <Title>{template.title}</Title>
            <CloseBtn src="/images/modal_exit.svg" alt="modal exit" />
          </Top>
          <Subtitle>{template.subtitle}</Subtitle>
          <Border />
          <Body>
            {template.blocks.map((b) => (
              <Block>{b.text}</Block>
            ))}
          </Body>
          <Gradation />
          <Description>
            회의일정은 회사 내에서 회의 내용에 대한 공지 시에 사용됩니다.
          </Description>
          <CopyBtn>복사하기</CopyBtn>
        </Modal>
      )}
    </>
  );
}

const Modal = styled(ReactModal)`
  box-shadow: 0px 3.34333px 10.03px rgba(0, 0, 0, 0.1);

  width: 336px;
  height: 504px;
  padding-top: 24px;
  padding-left: 28px;

  border-radius: 4px;
  background: ${colors.default.white};
  z-index: 3;

  &:focus {
    outline: none;
  }
`;

const Top = styled.div`
  width: 288px;
  height: 23px;

  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 16px;
  color: ${colors.default.black};
`;

const CloseBtn = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const Subtitle = styled.div`
  margin-top: 12px;

  font-weight: 400;
  font-size: 12px;
  color: ${colors.default.black};
`;

const Border = styled.div`
  width: 280px;
  height: 1px;
  margin-top: 12px;

  background: ${colors.gray.gray4};
`;

const Body = styled.div`
  width: 294px;
  height: 288px;
  padding-right: 15px;
  padding-bottom: 28px;
  position: absolute;

  overflow: auto;

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${colors.main.main};
    border-radius: 20px;
  }
`;

const Block = styled.div`
  margin-top: 16px;

  font-weight: 300;
  font-size: 11px;
  line-height: 160%;
  color: ${colors.default.black};
`;

const Description = styled.div`
  /* margin-top: 20px; */
  margin-top: 32px;

  font-weight: 500;
  font-size: 11px;
  color: ${colors.main.main};
`;

const CopyBtn = styled.button`
  width: 106px;
  height: 34px;
  margin-top: 20px;
  margin-left: 91px;
  border-radius: 2px;

  font-weight: 500;
  font-size: 12px;

  color: ${colors.default.white};
  background: ${colors.main.main};
`;

const Gradation = styled.div`
  width: 276px;
  height: 60px;
  margin-top: 228px;

  position: relative;

  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 100%);
`;
