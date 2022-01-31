import ReactDOM from 'react-dom';
import App from './App';

import GlobalStyle from './styles/GlobalStyle';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <>
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </>,
  document.getElementById('root')
);
