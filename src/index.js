import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/components/App';
import registerServiceWorker from './others/registerServiceWorker';
import store from './js/store/index';
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
