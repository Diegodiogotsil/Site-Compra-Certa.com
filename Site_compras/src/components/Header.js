// src/components/Header.js
import React from 'react';
import './Header.css';
import { FaShoppingCart } from 'react-icons/fa';
import ImageCarousel from './ImageCarousel';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // Importe o hook do contexto
import Botaotema from './BotaoTema';
import login from '../img/login.png';
import { Link } from 'react-router-dom';


const Header = () => {
  const { cartCount } = useCart(); // Acesse a contagem do carrinho
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate('/carrinho-compras');
  };

  return (
    <>
      <header className="header">
        <div className="logo">
          <img src={`${process.env.PUBLIC_URL}/imagens/logo2.jpg`} alt="Compra Certa Logo" className="logo-image" />
          Compra Certa.com
        </div>
        <div className="div-search-bar">
          <div className="search-bar">
            <input type="text" placeholder="Buscar produtos, marcas e muito mais..." />
            <button type="submit">Buscar</button>
          </div>
        </div>
        <div className="tooltip-container">
          <Botaotema />
          <span className="tooltip-text">Tema</span> {/* Tooltip customizado */}
        </div>
        <div className="tooltip-container">
          <Link to="/cadastro">
          <button className="cart-icon">
            <img className='botão-de-login' src={login} alt="Login" />
          </button>
          </Link>
          <span className="tooltip-text">Entrar</span> {/* Tooltip customizado */}
        </div>
        <div className="tooltip-container">
          <div className="cart-icon" onClick={handleCartClick}>
            <FaShoppingCart size={28} />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </div>
          <span className="tooltip-text2">Carrinho</span>
        </div>
      </header>
      <ImageCarousel />
    </>
  );
};

export default Header;
