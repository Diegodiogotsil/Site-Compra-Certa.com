// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CartProvider } from './context/CartContext';
import { TemaProvider } from './TemaContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TemaProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </TemaProvider>
);
