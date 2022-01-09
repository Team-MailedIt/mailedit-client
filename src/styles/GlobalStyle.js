import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

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
  display: block;
  
  margin-block-start: 0px;
  margin-block-end: 6px;
}
`;

export default GlobalStyle;
