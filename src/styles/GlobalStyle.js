import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import COLORS from '../constants/colors';

const GlobalStyle = createGlobalStyle`
${normalize}

html,
  body {
    height: 100vh;
    width: 100vw;
    
    padding: 0;
    margin-right: 40px;

  }
  a {
  text-decoration-line: none;
  color:black
  }

p{
  display: block;
  
  margin-block-start: 0px;
  margin-block-end: 6px;
  /* margin-inline-start: 0px;
  margin-inline-end: 0px; */
}

::placeholder {
  color: ${COLORS.gray5};
  opacity: 1; /* Firefox */
}


`;

export default GlobalStyle;
