import { useState } from 'react';
import { useParams } from 'react-router-dom'; // Para pegar o token da URL
import api from '../../servicos/Api';

function ResetPassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); // Adicionando confirmação de senha
  const [message, setMessage] = useState(''); // Estado para mensagem de erro ou sucesso
  const { token } = useParams();

  const handleReset = async (e) => {
    e.preventDefault();

    // Limpar mensagem anterior
    setMessage('');

    // Verificar se as senhas coincidem
    if (password !== confirmPassword) {
      setMessage('As senhas não coincidem');
      return;
    }

    try {
      // Enviar o token e a nova senha para o backend
      const response = await api.post('/reset-password', { token, password });

      // Exibir mensagem de sucesso do backend
      setMessage('Senha alterada com sucesso!');
    } catch (error) {
      // Exibir mensagem de erro vinda do backend
      if (error.response && error.response.data) {
        setMessage(error.response.data.message || 'Erro ao redefinir senha');
      } else {
        setMessage('Erro ao redefinir senha');
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleReset}>
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
      </form>

      {/* Exibir mensagem de erro ou sucesso */}
      {message && <p>{message}</p>}
    </div>
  );
}

export default ResetPassword;
