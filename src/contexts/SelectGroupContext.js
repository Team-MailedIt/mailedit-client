import { createContext, useState, useCallback } from 'react';

export const SelectGroupContext = createContext({
  state: { selectedGroupId: [], selectAll: true },
  actions: {
    setSelectedGroupId: () => {},
    setSelectAll: () => {},
  },
});

const SelectGroupProvider = ({ children }) => {
  const [selectedGroupId, setSelectedGroupId] = useState([]);
  // const [selectAll, setSelectAll] = useState(true);

  // const setSelectAllHandler = useCallback(() => {
  //   setSelectAll(!selectAll);
  // }, [selectAll]);

  const setSelectGroupHandler = useCallback((selectedGroupId) => {
    setSelectedGroupId(selectedGroupId);
  }, []);

  return (
    <SelectGroupContext.Provider
      value={{
        selectedGroupId,
        setSelectGroupHandler,
        // setSelectAllHandler,
        // selectAll,
      }}
    >
      {children}
    </SelectGroupContext.Provider>
  );
};

export default SelectGroupProvider;
