import { createContext, useState } from "react";

const SelectGroupContext = createContext({
  state: { selectedGroupId: [] },
  actions: {
    setSelectedGroupId: () => {},
  },
});

const SelecteGroupProvider = ({ children }) => {
  const [selectedGroupId, setSelectedGroupId] = useState([]);
  const value = {
    state: { selectedGroupId },
    actions: { setSelectedGroupId },
  };

  return (
    <SelectGroupContext.Provider value={value}>
      {children}
    </SelectGroupContext.Provider>
  );
};

const { Consumer: SelectGroupConsumer } = SelectGroupContext;
export { SelecteGroupProvider, SelectGroupConsumer };
