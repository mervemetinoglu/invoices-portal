import './styles/index.scss';
import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import Spinner from './components/Spinner';
import './localization/i18next';

ReactDOM.render(
  <Suspense fallback={<Spinner />}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Suspense>,
  document.getElementById('root')
);
