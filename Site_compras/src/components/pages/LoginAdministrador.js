import './Cadastro.css';
import api from '../../servicos/Api';
import { useRef, useState } from 'react';

function LoginAdministrador() {
    const inputEmail = useRef();
    const inputPassword = useRef();
    const [errorMessage, setErrorMessage] = useState('');

    async function loginADM() {
        // Validação dos campos
        const email = inputEmail.current.value.trim();
        const password = inputPassword.current.value.trim();

        if (!email || !password) {
            setErrorMessage('Todos os campos são obrigatórios.');
            return;  // Interrompe o envio se faltar dados
        }

        // Se os campos estiverem preenchidos, limpa a mensagem de erro
        setErrorMessage('');

        try {
            // Enviar o email e senha para a rota de login
            await api.post('/loginADM', {
                email: email,
                password: password
            });

            // Se o login for bem-sucedido, redireciona o usuário
            alert('Login de administrador bem-sucedido!');
            window.location.href = '/login-adm'; // Exemplo de redirecionamento para outra página
        } catch (error) {
            // Mostrar mensagem de erro detalhada
            if (error.response && error.response.data.message) {
                setErrorMessage(error.response.data.message);
            } else {
                setErrorMessage('Sistema indisponivel. Tente novamente mais tarde.');
            }
        }
    }

    return (
        <div className='container-cadastro'>
            <form className='form-cadastro'>
                <h1>Login do ADM (a) !</h1>
                <input placeholder='E-mail' name='e-mail' type='email' ref={inputEmail} />
                <input placeholder='Senha' name='senha' type='password' ref={inputPassword} />
                {/* Exibir mensagem de erro se os campos não forem preenchidos ou se o usuário já existir */}
                {errorMessage && <p className='error-message'>{errorMessage}</p>}

                <button type='button' onClick={loginADM}>Conectar</button>
                
            </form>
        </div>
    )
}

export default LoginAdministrador;
