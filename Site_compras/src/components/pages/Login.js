import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import UserActionTypes from '../../redux/user/action-types';
import api from '../../servicos/Api';
import './Cadastro.css';

function Login() {
  const inputEmail = useRef();
  const inputPassword = useRef();
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function loginUsers() {
    const email = inputEmail.current.value.trim();
    const password = inputPassword.current.value.trim();

    if (!email || !password) {
      setErrorMessage('Todos os campos são obrigatórios.');
      return;
    }

    setErrorMessage('');

    try {
      const response = await api.post('/login', { email, password });
      const userData = response.data.user;

      dispatch({
        type: UserActionTypes.LOGIN,
        payload: {
          name: userData.name,
          email: userData.email,
          age: userData.age,
        },
      });

      // Verifica se há um redirecionamento salvo
      const redirectAfterLogin = localStorage.getItem('redirectAfterLogin');
      if (redirectAfterLogin) {
        alert('Usuário logado com sucesso, você será redirecionado para pagina de pagamentos!');
        navigate(redirectAfterLogin);
        localStorage.removeItem('redirectAfterLogin');
      } else {
        alert('Usuário logado com sucesso!');
        navigate('/'); // Redireciona para home se não houver redirecionamento salvo
      }

    } catch (error) {
      if (error.response && error.response.data.message) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage('Erro ao logar usuário. Tente novamente mais tarde.');
      }
    }
  }

  return (
    <div className='container-cadastro'>
      <form className='form-cadastro'>
        <h1>Bem vindo (a) !</h1>
        <input placeholder='E-mail' name='e-mail' type='email' ref={inputEmail} />
        <input placeholder='Senha' name='senha' type='password' ref={inputPassword} />
        {errorMessage && <p className='error-message'>{errorMessage}</p>}

        <button type='button' onClick={loginUsers}>Entrar</button>
        <div>
          <Link to="/cadastro">
            <p className='link-cadastre-se'>Cadastre-se e saiba mais</p>
          </Link>
          <Link to="/esqueci-minha-senha">
            <p className='link-cadastre-se'>Esqueci minha senha</p>
          </Link>
          <Link to="/Login-Administrador">
            <p className='link-cadastre-se'>Login do administrador</p>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
