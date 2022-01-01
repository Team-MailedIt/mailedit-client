import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html,
body {
  margin: 0;
  background-color:'#FAFAFA';
  /* Center Container */
  display: flex;
  align-items: center;
  justify-content: center;
}
a{
  text-decoration-line : none;
  color: black;
}
p{
  font-size: 12px
  display: block;
  margin-block-start: 0px;
  margin-block-end: 6px;
  /* margin-inline-start: 0px;
  margin-inline-end: 0px; */
}
`;

export default GlobalStyle;
