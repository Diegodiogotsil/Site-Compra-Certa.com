// src/components/Product.js
import React, { useState } from 'react';
import './Product.css';
import { useDispatch } from 'react-redux';
import { addprodutoaoCarrinho } from '../redux/cart/actions';

const Product = ({ product }) => {
  const dispatch = useDispatch()

  const handleProductClick = () => {
    dispatch(addprodutoaoCarrinho(product))
  }

  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
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
      <button className="add-to-cart-button" onClick={handleProductClick}>
        Adicionar ao Carrinho
      </button>     
    </div>
  );
};

export default Product;
