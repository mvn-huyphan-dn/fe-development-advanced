import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import './assets/line-awesome/line-awesome.scss'
import './assets/scss/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { ProvideAuth } from './components';

const history = createBrowserHistory()

ReactDOM.render(
  <ProvideAuth>

    <Router history={history}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>

  </ProvideAuth>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
