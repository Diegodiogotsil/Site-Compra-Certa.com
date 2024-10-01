import React, { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Produto from './components/pages/Produto';
import CarrinhoCompras from './components/pages/CarrinhoCompras';
import { TemaContext } from './TemaContext';
import './App.css';
import Cadastro from './components/pages/Cadastro';
import LoginADM from './components/pages/LoginADM';
import ResetPassword from './components/pages/ResetPassword';
import Login from './components/pages/Login';
import ForgotPassword from './components/pages/ForgotPassword';

function App() {
  const { tema } = useContext(TemaContext);

  return (
    <div className={`App ${tema === "escuro" ? "Tema-escuro" : ""}`}>
      <BrowserRouter>      
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/produto" element={<Produto/>} />
          <Route path="/carrinho-compras" element={<CarrinhoCompras/>} />
          <Route path="/cadastro" element={<Cadastro/>} />
          <Route path="/login-adm" element={<LoginADM/>} />
          <Route path="/reset-password" element={<ResetPassword/>} />
          <Route path="/esqueci-minha-senha" element={<ForgotPassword/>} />
          <Route path="/login-users" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
