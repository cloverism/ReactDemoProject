import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';
import App from './App';

import { store, persistor } from './redux/store';

ReactDOM.render(
  // USE REDUX with store
  <Provider store={store}>
    {/* USE REACT ROUTER DOM */}
    <BrowserRouter>
      <ScrollToTop>
        {/* USE react-persist */}
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </ScrollToTop>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
