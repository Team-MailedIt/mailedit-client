import { createContext, useState } from "react";

export const SelectGroupContext = createContext({
  state: { selectedGroupId: [] },
  actions: {
    setSelectedGroupId: () => {},
  },
});

const SelectGroupProvider = ({ children }) => {
  const [selectedGroupId, setSelectedGroupId] = useState([]);

  const setSelectGroupHandler = (selectedGroupId) =>
    setSelectedGroupId(selectedGroupId);

  return (
    <SelectGroupContext.Provider
      value={{ selectedGroupId, setSelectGroupHandler }}
    >
      {children}
    </SelectGroupContext.Provider>
  );
};

export default SelectGroupProvider;
