import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import COLORS from "../constants/colors";

const GlobalStyle = createGlobalStyle`
${normalize}

html,
body {
  margin: 0;
  padding: 0;
}

a{
  text-decoration-line : none;
  color: black;
}

p{  
  margin-block-start: 0px;
  margin-block-end: 6px;
}

::placeholder {
  color: ${COLORS.gray5};
  opacity: 1; /* Firefox */
}


input:focus , select:focus, option:focus, textarea:focus, button:focus{
  outline: none;
}

button:hover {
  cursor: pointer
}


`;

export default GlobalStyle;
