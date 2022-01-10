import { createContext, useState } from 'react';

export const CopyContext = createContext({
  action: false,
  setActionHandler: (action) => {},
});

const CopyContextProvider = ({ children }) => {
  const [isCopy, setIsCopy] = useState(false);
  const setIsCopyHandler = (action) => setIsCopy(action);

  return (
    <CopyContext.Provider
      value={{
        action: isCopy,
        setActionHandler: setIsCopyHandler,
      }}
    >
      {children}
    </CopyContext.Provider>
  );
};
export default CopyContextProvider;
