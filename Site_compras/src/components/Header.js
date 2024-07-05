import React from 'react';
import './Header.css';
import { FaShoppingCart } from 'react-icons/fa';
import ImageCarousel from './ImageCarousel';  // Importe o novo componente

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="logo">
          <img src={`${process.env.PUBLIC_URL}/imagens/logo2.jpg`} alt="Compra Certa Logo" className="logo-image" /> {/* Adicione a imagem do logo aqui */}
          Compra Certa.com
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Buscar produtos, marcas e muito mais..." />
          <button type="submit">Buscar</button>
        </div>
        <div className="cart-icon">
          <FaShoppingCart size={24} />
        </div>
      </header>
      <ImageCarousel /> {/* Adicione o componente do carrossel aqui */}
    </>
  );
}

export default Header;
