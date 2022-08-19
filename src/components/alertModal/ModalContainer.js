import AlertContainer from './AlertContainer';

const ModalContainer = ({ isModalOpen, setIsModalOpen, modalOption }) => {
  return (
    <>
      {modalOption === 'copy' ? (
        <AlertContainer
          isAlertOpen={isModalOpen}
          setIsAlertOpen={setIsModalOpen}
          title="템플릿 복사 완료!"
          text1="복사된 템플릿을"
          text2="메일에 붙여 넣어 사용해 보세요."
        />
      ) : (
        <AlertContainer
          isAlertOpen={isModalOpen}
          setIsAlertOpen={setIsModalOpen}
          title="템플릿 저장 완료!"
          text1="저장된 템플릿은"
          text2="마이템플릿에서 확인할 수 있어요."
        />
      )}
    </>
  );
};

export default ModalContainer;
