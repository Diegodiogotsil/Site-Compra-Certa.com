// src/components/Header.js
import React from 'react';
import './Header.css';
import { FaShoppingCart } from 'react-icons/fa';
import ImageCarousel from './ImageCarousel';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // Importe o hook do contexto
import Botaotema from './BotaoTema';

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
        <div>
          <Botaotema/>
        </div>
        <div className="cart-icon" onClick={handleCartClick}>
          <FaShoppingCart size={28} />
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}         
        </div>
      </header>
      <ImageCarousel />
    </>
  );
};

export default Header;
