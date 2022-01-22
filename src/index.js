import ReactDOM from 'react-dom';
import App from './App';

import FontStyle from './styles/FontStyle';
import GlobalStyle from './styles/GlobalStyle';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <>
    <BrowserRouter>
      <GlobalStyle />
      <FontStyle />
      <App />
    </BrowserRouter>
  </>,
  document.getElementById('root')
);
