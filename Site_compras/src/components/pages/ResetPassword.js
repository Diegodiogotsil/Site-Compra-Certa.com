import { useState } from 'react';
import { useParams } from 'react-router-dom'; // Para pegar o token da URL
import api from '../../servicos/Api';

function ResetPassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); // Adicionando confirmação de senha
  const { token } = useParams();

  const handleReset = async (e) => {
    e.preventDefault();

    // Verificar se as senhas coincidem
    if (password !== confirmPassword) {
      alert('As senhas não coincidem');
      return;
    }

    // Validação da força da senha (você pode adicionar uma função para verificar a força da senha aqui, se desejar)

    try {
      await api.post('/reset-password', { token, password });
      alert('Senha alterada com sucesso!');
    } catch (error) {
      alert('Erro ao redefinir senha');
    }
  };

  return (
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
  );
}

export default ResetPassword;
