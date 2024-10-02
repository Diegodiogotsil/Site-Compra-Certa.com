import './Cadastro.css';
import api from '../../servicos/Api';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
    const inputEmail = useRef();
    const inputPassword = useRef();
    const [errorMessage, setErrorMessage] = useState('');

    async function loginUsers() {
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
            const response = await api.post('/login', {
                email: email,
                password: password
            });

            // Se o login for bem-sucedido, redireciona o usuário
            alert('Usuário logado com sucesso!');
            window.location.href = '/'; // Exemplo de redirecionamento para outra página
        } catch (error) {
            // Mostrar mensagem de erro detalhada
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
                {/* Exibir mensagem de erro se os campos não forem preenchidos ou se o usuário já existir */}
                {errorMessage && <p className='error-message'>{errorMessage}</p>}

                <button type='button' onClick={loginUsers}>Entrar</button>
                <div>
                    <Link to="/cadastro">
                        <p className='link-cadastre-se'>Cadastre-se e saiba mais</p>
                    </Link>
                    <Link to="/esqueci-minha-senha">
                        <p className='link-cadastre-se'>Esqueci minha senha</p>
                    </Link>
                    <Link to="/esqueci-minha-senha">
                        <p className='link-cadastre-se'>Login do administrador</p>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default Login;
