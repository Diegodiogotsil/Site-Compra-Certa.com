import React from 'react';
import './Header.css';
import { FaShoppingCart } from 'react-icons/fa';
import ImageCarousel from './ImageCarousel';
import { useNavigate } from 'react-router-dom';
import Botaotema from './BotaoTema';
import login from '../img/login.png';

import { useDispatch, useSelector } from 'react-redux';
import UserActionTypes from '../redux/user/action-types';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Acessar o usuário atual
  const { currentUser } = useSelector((state) => state.userReducer);

  // Acessar os itens do carrinho
  const cartItems = useSelector((state) => state.cartReducer.produtos);

  // Calcular a quantidade total de itens no carrinho
  const cartCount = cartItems.reduce((accum, item) => accum + item.quantity, 0);

  const handleCartClick = () => {
    navigate('/carrinho-compras');
  };

  const HandleLoginClick = () => {
    navigate('/login-users');
  };

  const HandleLogoutClick = () => {
    dispatch({
      type: UserActionTypes.LOGOUT,
    });
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
          <span className="tooltip-text">Tema</span>
        </div>

        {currentUser ? (
          <div className="tooltip-container" onClick={HandleLogoutClick}>
            <button className="cart-icon">
              <img className='botão-de-login' src={login} alt="Login" />
            </button>
            <span className="tooltip-text">Sair</span>
          </div>
        ) : (
          <div className="tooltip-container" onClick={HandleLoginClick}>
            <button className="cart-icon">
              <img className='botão-de-login' src={login} alt="Login" />
            </button>
            <span className="tooltip-text">Entrar</span>
          </div>
        )}

        <div className="tooltip-container">
          <div className="cart-icon" onClick={handleCartClick}>
            <FaShoppingCart size={28} />
            {cartCount > 0 && (
              <span className="cart-count">{cartCount}</span> // Adiciona o contador
            )}
          </div>
          <span className="tooltip-text2">Carrinho</span>
        </div>
      </header>
      <ImageCarousel />
    </>
  );
};

export default Header;
