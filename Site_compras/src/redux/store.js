// src/store.js
import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Usa localStorage
import rootReducer from "./root-reducer";
import logger from "redux-logger";

// Configurações de persistência
const persistConfig = {
  key: 'root',
  storage, // Define que o localStorage será usado
  whitelist: ['user', 'cart'] // Nome do reducer que queremos persistir (usuário)
};

// Cria um reducer persistidoy
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Cria a store com o reducer persistido
const store = createStore(persistedReducer, applyMiddleware(logger));

// Cria o persistor que vai sincronizar o estado com o storage
export const persistor = persistStore(store);

export default store;
