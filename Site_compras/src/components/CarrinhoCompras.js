// src/components/CarrinhoCompras.js
import React from 'react';
import './CarrinhoCompras.css';
import { useCart } from '../context/CartContext'; // Certifique-se de que o caminho está correto

const CarrinhoCompras = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div className="carrinho-compras">
      <h1>Carrinho de Compras</h1>
      {cartItems.length === 0 ? (
        <p>O carrinho está vazio</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <p>{item.price}</p>
              <button onClick={() => removeFromCart(item.id)}>Remover</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CarrinhoCompras;
