import { useState } from 'react';
import api from '../../servicos/Api';
import { useNavigate } from 'react-router-dom'; // Para redirecionar após o envio do e-mail
import './Cadastro.css';


function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Hook para redirecionar
  

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    

    try {
      const response = await api.post('/forgot-password', { email });

      // Se o envio do e-mail for bem-sucedido, defina a mensagem de sucesso
      setMessage('E-mail de recuperação enviado! Verifique sua caixa de entrada.');

      // Redirecionar para a página de login após 5 segundos
      setTimeout(() => {
        navigate('/login-users');
      }, 5000); // Redireciona após 5 segundos


    } catch (error) {
      // Verificar se o erro contém uma resposta do servidor
      if (error.response && error.response.data && error.response.data.message) {
        setMessage(error.response.data.message);
      } else {
        // Caso contrário, exibir uma mensagem genérica
        setMessage('Erro ao enviar o e-mail de recuperação. Verifique se o e-mail está correto.');
      }
    }
  }

  return (
    <div className='container-cadastro'>

      <form className='form-cadastro' onSubmit={handleForgotPassword}>
        <h1>Esqueci a Senha</h1>
        <input
          type="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Enviar E-mail</button>
        {message && <p className='error-message'>{message}</p>}
      </form>
    </div>
  );
}

export default ForgotPassword;
