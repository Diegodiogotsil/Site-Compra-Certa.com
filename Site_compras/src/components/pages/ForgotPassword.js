import { useState, useRef } from 'react';
import api from '../../servicos/Api';
import './Cadastro.css';

function ForgotPassword() {
  const [message, setMessage] = useState('');  // Mensagem de sucesso ou erro ao enviar o e-mail
  const [errormessage, setErrorMessage] = useState('');
  const inputEmail = useRef();

  async function ResetEmail() {

    const email = inputEmail.current.value.trim();

    if (!email) {
      setErrorMessage('Todos os campos são obrigatórios.');
      return;  // Interrompe o envio se faltar dados
    }

    // Verificar se o input é válido antes de prosseguir
    if (!email) {
      setErrorMessage('Todos os campos são obrigatórios.');
      return;  // Interrompe o envio se faltar dados
    }
    setErrorMessage('');

    try {
      // Fazer requisição à API
      await api.post('/forgot-password', { email });

      // Se o envio do e-mail for bem-sucedido, definir a mensagem de sucesso
      setMessage('E-mail de recuperação enviado! Verifique sua caixa de entrada.');
      

    } catch (error) {
      // Captura a mensagem de erro específica do backend
      if (error.response && error.response.data && error.response.data.message) {
        setErrorMessage(error.response.data.message); // Mensagem específica do backend
      } else {
        setErrorMessage('Erro ao cadastrar usuário.');
      }
    }
  };

  return (
    <div className='container-cadastro'>
      <form className='form-cadastro'>
        <h1>Esqueci a Senha</h1>
        <input
          placeholder='E-mail'
          name='e-mail'
          type='email'
          ref={inputEmail}
        />
        <button type='button' onClick={ResetEmail}>Enviar</button>
        {message && <p className='message'>{message}</p>}  {/* Exibir mensagem de sucesso */}
        {errormessage && <p className='error-message'>{errormessage}</p>}
      </form>
    </div>
  );
}

export default ForgotPassword;
