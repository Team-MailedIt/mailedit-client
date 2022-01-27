import { createContext, useState } from "react";

export const SelectTemplateContext = createContext({
  state: { selectedId: [] },
  actions: {
    setSelectedId: () => {},
  },
});

const SelectTemplateProvider = ({ children }) => {
  const [selectedId, setSelectedId] = useState([]);

  const setSelectIdHandler = (selectedId) => setSelectedId(selectedId);

  return (
    <SelectTemplateContext.Provider value={{ selectedId, setSelectIdHandler }}>
      {children}
    </SelectTemplateContext.Provider>
  );
};

export default SelectTemplateProvider;
