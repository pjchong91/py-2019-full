import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import theme from 'src/styles/theme';
import GlobalStyle from 'src/styles/global';
import store from 'src/redux/store';
import UpdateLanguage from 'src/plugins/language';

import App from './App';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Router>
        <>
          <UpdateLanguage />
          <GlobalStyle />
          <App />
        </>
      </Router>
    </Provider>
  </ThemeProvider>,
  document.getElementById('app')
);
