// src/components/CarrinhoCompras.js
import React from 'react';
import './CarrinhoCompras.css';
import { useCart } from '../../context/CartContext'; // Certifique-se de que o caminho está correto
import Footer from '../Footer';

const CarrinhoCompras = () => {
  const { cartItems, removeFromCart, incrementQuantity, decrementQuantity, cartCount } = useCart();

  const calcularTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <main>
      <div className="container">
        <div className='content'>
          <h1 className='titulo-carrinho'>CARRINHO</h1>
          <div className='div-titulo'>
            <h1 className='div-titulo-h1'>Items</h1>
            <h1 className='div-titulo-h2'>Valor</h1>
            <h1>Quantidade</h1>
            <h1>Total</h1>
          </div>
          {cartItems.length === 0 ? (
            <p>O carrinho está vazio</p>
          ) : (
            <div className='div-geral-carrinho'>
              {cartItems.map(item => (
                <div className='div-carrinho' key={item.id}>
                  <div className='imagem-produto-carrinho2'>
                    <img className='imagem-produto-carrinho' src={item.image} alt={item.name} />
                    <h2 className='item-nome'>{item.name}</h2>
                  </div>
                  <div className='div-item-preço'>
                    <h1 className='item-preco'>Por Apenas:</h1>
                    <h1>{item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h1>
                  </div>
                  <div className='div-quantidade'>
                    <div className='div-botao-mn'>
                      <button className='botao-decrementar' onClick={() => decrementQuantity(item.id)}>-</button>
                      <span className='quantidade'>{item.quantity}</span>
                      <button className='botao-incrementar' onClick={() => incrementQuantity(item.id)}>+</button>
                    </div>
                    <div>
                      <button className='botao-remover' onClick={() => removeFromCart(item.id)}>Remover</button>
                    </div>
                  </div>
                  <div className='div-item-total'>
                    <h1>Total:</h1>
                    <h1>{(item.price * item.quantity).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h1>
                  </div>

                </div>
              ))}
              <div className='div-total-geral'>
                <h2>Total Geral: {calcularTotal().toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h2>
                <p>Total de Itens: {cartCount}</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default CarrinhoCompras;
