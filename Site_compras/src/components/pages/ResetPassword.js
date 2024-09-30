import { useState } from 'react';
import { useParams } from 'react-router-dom'; // Para pegar o token da URL
import api from '../../servicos/Api';

function ResetPassword() {
  const [password, setPassword] = useState('');
  const { token } = useParams();

  const handleReset = async (e) => {
    e.preventDefault();
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
      <button type="submit">Redefinir Senha</button>
    </form>
  );
}

export default ResetPassword;
