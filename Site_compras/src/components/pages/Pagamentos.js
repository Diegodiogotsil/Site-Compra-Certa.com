import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, incrementQuantity, decrementQuantity } from '../../redux/cart/actions';
import Footer from '../Footer';
import Header from '../Header';
import { useNavigate } from 'react-router-dom';

const Pagamentos = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.produtos);
  const UsuarioLogado = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();

  const Pagamento = () => {
    if (!UsuarioLogado) {
      // Se o usuário não estiver logado, salva a intenção e redireciona para login
      alert('Para prosseguir e preciso fazer o login!');
      localStorage.setItem('redirectAfterLogin', '/pagamento');
      navigate('/login-users');
    } else {
      // Se estiver logado, vai direto para a página de pagamento
      navigate('/nota-fiscal');
    }
  };

  const calcularTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <main>
      <Header/>
      <div className="container">     
        <div className='content'>          
          <h1 className='titulo-carrinho'>PAGAMENTO</h1>
          {cartItems.length === 0 ? (
            <div className='imagem-carrinho-vazio'>
              <img className='imagem-carrinho-vazio1'src="/imagens/carrinho.png" alt="Carrinho vazio" />
            </div>
          ) : (
            <div className='div-geral-carrinho'>
              <div className='div-titulo'>
                <h1>Item</h1>
                <h1>Descriçao</h1>
                <h1>Valor</h1>
                <h3>Quantidade</h3>
                <h2>Total</h2>
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
                <h2>Total Geral: <span>{calcularTotal().toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span></h2>
                <h2>Total de Itens: <span>{cartCount}</span></h2>
              </div>
              <button type="button" onClick={Pagamento}>Concluir a compra</button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Pagamentos;
