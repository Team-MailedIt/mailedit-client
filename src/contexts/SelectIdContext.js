import { createContext, useState } from "react";

export const SelectIdContext = createContext({
  state: { selectedId: [] },
  actions: {
    setSelectedId: () => {},
  },
});

const SelectIdProvider = ({ children }) => {
  const [selectedId, setSelectedId] = useState([]);

  const setSelectIdHandler = (selectedId) => setSelectedId(selectedId);

  return (
    <SelectIdContext.Provider value={{ selectedId, setSelectIdHandler }}>
      {children}
    </SelectIdContext.Provider>
  );
};

export default SelectIdProvider;
