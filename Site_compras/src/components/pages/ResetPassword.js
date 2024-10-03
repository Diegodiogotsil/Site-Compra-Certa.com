import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Para pegar o token da URL
import api from '../../servicos/Api';

function ResetPassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); // Adicionando confirmação de senha
  const [message, setMessage] = useState(''); // Estado para mensagem de sucesso
  const [errormessage, seterrorMessage] = useState(''); // Estado para mensagem de erro 
  const { token } = useParams();
  const navigate = useNavigate();

  const handleReset = async (e) => {
    e.preventDefault();


    // Verificar se as senhas coincidem
    if (password !== confirmPassword) {
      seterrorMessage('As senhas não coincidem');
      setMessage('');
      return;
    }

    try {
      // Enviar o token e a nova senha para o backend
      const response = await api.post('/reset-password', { token, password });

      // Exibir mensagem de sucesso do backend
      setMessage(response.data.message); // Usar a mensagem da resposta do backend
      seterrorMessage('');

      // Redirecionar para a página de login após 5 segundos
      setTimeout(() => {
        navigate('/login-users');
      }, 8000); // Redireciona após 8 segundos

    } catch (error) {
      // Exibir mensagem de erro vinda do backend
      if (error.response && error.response.data) {
        seterrorMessage(error.response.data.message || 'Erro ao redefinir senha');
        setMessage('');
      } else {
        seterrorMessage('Erro ao redefinir senha');
        setMessage('');
      }
    }
  };

  return (
    <div className='container-cadastro'>     
      <form className='form-cadastro' onSubmit={handleReset}>
      <h1>Redefinir senha</h1>
        <input
          type="password"
          placeholder="Nova Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirme a Nova Senha"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit">Redefinir Senha</button>
        {/* Exibir mensagem de erro ou sucesso */}
        {message && <p className='message'>{message}</p>}
        {errormessage && <div className='error-message'>{errormessage}</div>}
      </form>


    </div>
  );
}

export default ResetPassword;
