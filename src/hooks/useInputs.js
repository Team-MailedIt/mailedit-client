import { useState } from "react";

const useInputs = (initialForm) => {
  const [form, setForm] = useState(initialForm);

  const handleInputChange = (e) => {
    setForm((form) => ({ ...form, [e.target.name]: e.target.value }));
  };

  return [form, handleInputChange];
};

export default useInputs;
