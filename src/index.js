import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; // Import Provider
import store from './redux/store';
// Import your Redux store

ReactDOM.render(
  <React.StrictMode>
  
  <Provider store={store}>

<App />




</Provider>
 
  </React.StrictMode>,
  document.getElementById('root')
);
