// src/components/Product.js
import React, { useState } from 'react';
import './Product.css';
import { useCart } from '../context/CartContext'; 

const Product = ({ product }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { addToCart } = useCart(); // Acesse a função para adicionar ao carrinho

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleAddToCartClick = () => {
    addToCart(product); // Adiciona o produto ao carrinho
  };

  return (
    <div className="product">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} className="product-image" />
      <p className='oldprice'>{product.oldprice}</p>
      <p>{product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
      <div className={`product-description ${isExpanded ? 'expanded' : ''}`}>
        <p>{product.description}</p>
        {/* Botão de expandir */}
        <div className="expand-button" onClick={handleExpandClick}>
          {isExpanded ? 'Ver menos' : 'Ver mais'}
        </div>
      </div>
      <button className="add-to-cart-button" onClick={handleAddToCartClick}>
        Adicionar ao Carrinho
      </button>
    </div>
  );
};

export default Product;
