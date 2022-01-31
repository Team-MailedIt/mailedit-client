import { createGlobalStyle } from 'styled-components';

const FontStyle = createGlobalStyle`
@font-face {
  font-family: 'Pretendard'; //Pretendard-Light
  src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Light.woff') format('woff');
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: 'Pretendard'; //Pretendard-Regular
  src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Pretendard'; //Pretendard-SemiBold
  src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-SemiBold.woff') format('woff');
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: 'Pretendard'; //Pretendard-Bold
  src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff') format('woff');
  font-weight: 700;
  font-style: normal;
}

* {
  font-family: 'Pretendard', sans-serif;
}

p {
  font-size:16px;
  line-height:24px;
}
 
`;

export default FontStyle;
