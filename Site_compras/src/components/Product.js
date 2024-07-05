// src/components/Product.js
import React, { useState } from 'react';
import './Product.css';

const Product = ({ product }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="product">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} className="product-image" />
      <p>{product.price}</p>
      <div className={`product-description ${isExpanded ? 'expanded' : ''}`}>
        <p>{product.description}</p>
        {/* Botão de expandir */}
        <div className="expand-button" onClick={handleExpandClick}>
          {isExpanded ? 'Ver menos' : 'Ver mais'}
        </div>
      </div>
      <button className="add-to-cart-button">Adicionar ao Carrinho</button>
    </div>
  );
}

export default Product;
