import { createContext, useState } from "react";

export const ContentContext = createContext({
  state: { content: null },
  actions: {
    setContent: () => {},
  },
});

const ContentProvider = ({ children }) => {
  const [content, setContent] = useState(null);

  const setContentHandler = (content) => setContent(content);

  return (
    <ContentContext.Provider value={{ content, setContentHandler }}>
      {children}
    </ContentContext.Provider>
  );
};

export default ContentProvider;
