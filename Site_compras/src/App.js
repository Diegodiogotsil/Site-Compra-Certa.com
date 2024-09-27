import React, { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Produto from './components/pages/Produto';
import CarrinhoCompras from './components/pages/CarrinhoCompras';
import { TemaContext } from './TemaContext';
import './App.css';
import Cadastro from './components/pages/Cadastro';
import LoginADM from './components/pages/LoginADM';

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
