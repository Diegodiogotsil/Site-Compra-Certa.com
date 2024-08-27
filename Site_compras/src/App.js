import React, { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Produto from './components/pages/Produto';
import CarrinhoCompras from './components/CarrinhoCompras';
import { TemaContext } from './TemaContext';
import './App.css';

function App() {
  const { tema, toggleTema } = useContext(TemaContext);

  return (
    <div className={`App ${tema === "escuro" ? "Tema-escuro" : ""}`}>
      <BrowserRouter>
      {/* Coloque esses elementos fora de <Routes> */}
      <div>O tema atual é {tema}</div>
        <button onClick={toggleTema}>Mudar Tema</button>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produto" element={<Produto />} />
          <Route path="/carrinho-compras" element={<CarrinhoCompras />} />
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
