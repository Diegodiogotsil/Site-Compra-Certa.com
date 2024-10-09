import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, incrementQuantity, decrementQuantity } from '../../redux/cart/actions';
import './CarrinhoCompras.css';
import Footer from '../Footer';

const CarrinhoCompras = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cartReducer.produtos);

  const calcularTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <main>
      <div className="container">
        <div className='content'>
          <h1 className='titulo-carrinho'>CARRINHO</h1>
          {cartItems.length === 0 ? (
            <div className='imagem-carrinho-vazio'>
              <img className='imagem-carrinho-vazio1'src="/imagens/carrinho.png" alt="Carrinho vazio" />
            </div>
          ) : (
            <div className='div-geral-carrinho'>
              <div className='div-titulo'>
                <h1 className='div-titulo-h1'>Item</h1>
                <h1 className='div-titulo-3'>Descriçao</h1>
                <h1 className='div-titulo-h2'>Valor</h1>
                <h1 className='div-Quantidade'>Quantidade</h1>
                <h1>Total</h1>
              </div>
              {cartItems.map(item => (
                <div className='div-carrinho' key={item.id}>
                  <div className='imagem-produto-carrinho2'>
                    <img className='imagem-produto-carrinho' src={item.image} alt={item.name} />
                  </div>
                  <div className='item-div-nome'>
                    <h2 className='item-nome'>{item.name}</h2>
                  </div>
                  <div className='div-item-preço'>
                    <h1 className='item-preco'>Por Apenas:</h1>
                    <h1>{item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h1>
                  </div>
                  <div className='div-quantidade'>
                    <div className='div-botao-mn'>
                      <button className='botao-decrementar' onClick={() => dispatch(decrementQuantity(item.id))}>-</button>
                      <span className='quantidade'>{item.quantity}</span>
                      <button className='botao-incrementar' onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
                    </div>
                    <div>
                      <button className='botao-remover' onClick={() => dispatch(removeFromCart(item.id))}>Remover</button>
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
