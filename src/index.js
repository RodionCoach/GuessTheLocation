import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';

import configureStore from 'redux/configureStore';

import GlobalStyle from 'components/GlobalStyle';
import AppRouter from './router';

const store = configureStore();

ReactDOM.render(
  <>
    <GlobalStyle />
    <ReduxProvider store={store}>
      <AppRouter />
    </ReduxProvider>
  </>,
  document.getElementById('root'),
);
