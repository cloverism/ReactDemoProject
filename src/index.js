import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';

import store from './redux/store';

ReactDOM.render(
  // USE REDUX with store
  <Provider store={store}>
    {/* USE REACT ROUTER DOM */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
