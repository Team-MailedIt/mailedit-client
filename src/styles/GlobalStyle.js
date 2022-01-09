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
  /* display: block; */
  
  margin-block-start: 0px;
  margin-block-end: 6px;
}

::placeholder {
  color: ${COLORS.gray5};
  opacity: 1; /* Firefox */
}


`;

export default GlobalStyle;
