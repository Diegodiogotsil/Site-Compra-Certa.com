// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { TemaProvider } from './TemaContext';
import { Provider } from 'react-redux';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TemaProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </TemaProvider>
);
