import { useState } from "react";
import EditorContainer from "../components/workspace/EditorContainer";
import TemplatePage from "../components/workspace/TemplatePage";
import uid from "../utils/uid";
import CopyContextProvider from "../contexts/CopyContexts";
import WorkSpaceSidebar from "../components/workspace/WorkSpaceSidebar";
import { GroupProvider } from "../contexts/GroupContexts";
import { PositionProvider } from "../contexts/ElementPositionContexts";

const WorkSpace = () => {
  // Template Page에서 가져온 block의 html을
  // EditPage 배열의 맨 마지막 element로 넣어줘야함
  const [blocks, setBlocks] = useState(null);

  const getBlockFromTemplate = (element) => {
    const newBlock = { ...element, id: uid() };
    // setBlock하기 전에 \n를 <div></div>로 수정해야됨,,,
    setBlocks(newBlock);
  };

  const getAllBlockFromTemplate = (elementArray) => {
    let NewArray = [];
    elementArray.forEach((element) => {
      NewArray = [...NewArray, { ...element, id: uid() }];
    });
    setBlocks(NewArray);
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1.7fr 8.3fr",
      }}
    >
      <PositionProvider>
        <GroupProvider>
          <WorkSpaceSidebar />
          <CopyContextProvider>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
              }}
            >
              <TemplatePage
                getBlockFromTemplate={getBlockFromTemplate}
                getAllBlockFromTemplate={getAllBlockFromTemplate}
              />
              <EditorContainer passedBlocks={blocks} />
            </div>
          </CopyContextProvider>
        </GroupProvider>
      </PositionProvider>
    </div>
  );
};

export default WorkSpace;
