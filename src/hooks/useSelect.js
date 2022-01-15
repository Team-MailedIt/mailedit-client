import { useState } from 'react';

const useSelect = (initialState) => {
  const [state, setState] = useState(initialState);

  const handleSelectChange = (e) => {
    console.log(e);
    // setForm((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const resetState = () => setState(initialState);

  return [state, handleSelectChange, resetState];
};

export default useSelect;
