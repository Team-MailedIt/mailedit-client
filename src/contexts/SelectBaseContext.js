import { createContext, useState } from "react";

export const SelectBaseContext = createContext({
  state: { selectedBaseId: [] },
  actions: {
    setSelectedBaseId: () => {},
  },
});

const SelectBaseProvider = ({ children }) => {
  const [selectedBaseId, setSelectedBaseId] = useState([]);

  const setSelectBaseHandler = (selectedBaseId) =>
    setSelectedBaseId(selectedBaseId);

  return (
    <SelectBaseContext.Provider
      value={{ selectedBaseId, setSelectBaseHandler }}
    >
      {children}
    </SelectBaseContext.Provider>
  );
};

export default SelectBaseProvider;
