import React from 'react';
import './Header.css';
import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Botaotema from './BotaoTema';
import entrar from '../img/entrar.png';
import sair from '../img/sair.png';
import { useDispatch, useSelector } from 'react-redux';
import UserActionTypes from '../redux/user/action-types';
import BotaoPerfil from './BotaoPerfil';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Acessar o usuário atual corretamente
  const currentUser = useSelector((state) => state.user.currentUser);

  // Acessar os itens do carrinho
  const cartItems = useSelector((state) => state.cart.produtos);

  // Calcular a quantidade total de itens no carrinho
  const cartCount = cartItems.reduce((accum, item) => accum + item.quantity, 0);

  const handleCartClick = () => {
    navigate('/carrinho-compras');
  };
  const goHome = () => {
    navigate('/');
  };

  const handleLoginClick = () => {
    navigate('/login-users');
  };

  const handleLogoutClick = () => {
    dispatch({
      type: UserActionTypes.LOGOUT,
    });
  };

  return (

    <header className="header">
      <div className="logo" onClick={goHome}>
        <div className="tooltip-container">
          <img src={`${process.env.PUBLIC_URL}/imagens/logo2.jpg`} alt="Compra Certa Logo" className="logo-image" />
          <span className="tooltip-text2">Voltar para home</span>
        </div>
        <p>Compra Certa.com</p>
      </div>
      <div className="div-search-bar">
        <div className="search-bar">
          <input type="text" placeholder="Buscar produtos, marcas e muito mais..." />
          <button type="submit">Buscar</button>
        </div>
      </div>
      <div><BotaoPerfil /></div>
      {currentUser ? (
        <div className="tooltip-container" onClick={handleLogoutClick}>
          <button className="cart-icon">
            <img className='botão-de-login' src={sair} alt="Login" />
          </button>
          <span className="tooltip-text">Sair</span>
        </div>
      ) : (
        <div className="tooltip-container" onClick={handleLoginClick}>
          <button className="cart-icon">
            <img className='botão-de-login' src={entrar} alt="Login" />
          </button>
          <span className="tooltip-text">Entrar</span>
        </div>
      )}
      <div className="tooltip-container">
        <div className="cart-icon" onClick={handleCartClick}>
          <FaShoppingCart size={30} />
          {cartCount > 0 && (
            <span className="cart-count">{cartCount}</span> // Adiciona o contador
          )}
        </div>
        <span className="tooltip-text">Carrinho</span>
      </div>
      <div className="tooltip-container">
        <Botaotema />
        <span className="tooltip-text">Tema</span>
      </div>
    </header>

  );
};

export default Header;
