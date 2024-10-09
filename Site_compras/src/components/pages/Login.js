import './Cadastro.css';
import api from '../../servicos/Api';
import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'; // Import Redux Dispatch
import UserActionTypes from '../../redux/user/action-types'; // Import ActionTypes

function Login() {
    const inputEmail = useRef();
    const inputPassword = useRef();
    const [errorMessage, setErrorMessage] = useState('');
    const dispatch = useDispatch(); // Redux dispatch
    const navigate = useNavigate();

    async function loginUsers() {
        // Validação dos campos
        const email = inputEmail.current.value.trim();
        const password = inputPassword.current.value.trim();

        if (!email || !password) {
            setErrorMessage('Todos os campos são obrigatórios.');
            return;
        }

        setErrorMessage('');

        try {
            // Enviar o email e senha para a rota de login
            const response = await api.post('/login', { email, password });
            console.log(response.data);

            // Se o login for bem-sucedido, pegue os dados do usuário
            const userData = response.data.user; // Supondo que a API retorna os dados do usuário

            // Disparar a ação para o Redux com os dados do usuário
            dispatch({
                type: UserActionTypes.LOGIN,
                payload: {
                    name: userData.name,
                    email: userData.email,
                    age: userData.age,
                    // Outros dados relevantes, como foto, etc.
                },
            });

            // Redirecionar o usuário para a página inicial
            alert('Usuário logado com sucesso!');
            navigate('/'); 

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
