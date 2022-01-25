import { createContext, useState } from "react";

export const SelectTemplateContext = createContext({
  state: { selectedTemplate: [] },
  actions: {
    setSelectedTemplate: () => {},
  },
});

const SelectTemplateProvider = ({ children }) => {
  const [selectedTemplate, setSelectedTemplate] = useState([]);

  const setSelectTemplateHandler = (selectedTemplate) =>
    setSelectedTemplate(selectedTemplate);

  return (
    <SelectTemplateContext.Provider
      value={{ selectedTemplate, setSelectTemplateHandler }}
    >
      {children}
    </SelectTemplateContext.Provider>
  );
};

export default SelectTemplateProvider;
