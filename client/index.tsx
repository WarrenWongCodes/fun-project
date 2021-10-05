import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// Pass props via an interface
ReactDOM.render(
  <React.StrictMode>
    <App color='blue' shape='square' />
  </React.StrictMode>,
  document.getElementById('app')
);
