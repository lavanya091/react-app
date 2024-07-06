import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import reportWebVitals from './reportWebVitals';
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
