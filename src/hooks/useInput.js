import { useReducer } from 'react';

function reducer(state, action) {
  if (action.type === 'change') {
    //console.log(action);
    return action.target.value;
  } else {
    return '';
  }
}

export default function useInput(initialForm) {
  const [state, dispatch] = useReducer(reducer, initialForm);
  const onChange = (e) => {
    dispatch(e);
  };
  return [state, onChange];
}
