import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import COLORS from '../constants/colors';
import './FontStyle.css';

const GlobalStyle = createGlobalStyle`
${normalize}

html,
body {
  margin: 0;
  padding: 0;
}
*{
  font-family: 'Pretendard', Arial;
  font-display: fallback;
  box-sizing: border-box;

}
a{
  text-decoration-line : none;
  color: black;
}
p{  
  font-size: 16px;
  line-height: 24px;
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
img {
  -webkit-user-select:none; 
  -moz-user-select:none; 
  -ms-user-select:none; 
  user-select:none
}
.Overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgb(0, 0, 0, 0.5);
  }

  button {
        border: none;
        border-radius: 4px;
        background: none;

        display: flex;
        justify-content: center;
        align-items: center;
        
        cursor: pointer;
    }
`;

export default GlobalStyle;
