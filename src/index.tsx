import './index.css';
import './i18n';

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { AhfProvider } from 'store/context';

import { ThemeProvider } from '@material-ui/core';

import App from './App';
import * as serviceWorker from './serviceWorker';
import { ahfTheme } from './styles/ahf.theme';

ReactDOM.render(
  <Suspense fallback="loading">
    <ThemeProvider theme={ahfTheme}>
      <AhfProvider>
        <App />
      </AhfProvider>
    </ThemeProvider>
  </Suspense>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
