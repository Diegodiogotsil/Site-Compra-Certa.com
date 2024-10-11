// src/root-reducer.js
import { combineReducers } from 'redux';
import userReducer from './user/reducer'; // ou o caminho correto para o seu userReducer
import cartReducer from './cart/reducer'; // se houver um cartReducer

const rootReducer = combineReducers({
  user: userReducer,        // O estado do usuário está em 'user', não 'userReducer'
  cart: cartReducer,        // O estado do carrinho está em 'cart'
  // outros reducers...
});

export default rootReducer;
