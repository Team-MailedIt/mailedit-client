import ReactDOM from "react-dom";
import App from "./App";

import FontStyle from "./styles/FontStyle";
import GlobalStyle from "./styles/GlobalStyle";

ReactDOM.render(
  <>
    <GlobalStyle />
    <FontStyle />
    <App />
  </>,
  document.getElementById("root")
);
