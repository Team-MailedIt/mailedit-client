import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
${normalize}

html,
body {
  height: 100vh;
  width: 100vw;

  margin: 0;
  padding: 0;

  /* Center Container */
  display: flex;
  align-items: center;
  justify-content: center;
  background-color:'#FAFAFA';
}

a{
  text-decoration-line : none;
  color: black;
}

p{
  display: block;
  
  margin-block-start: 0px;
  margin-block-end: 6px;
  /* margin-inline-start: 0px;
  margin-inline-end: 0px; */
}
`;

export default GlobalStyle;
