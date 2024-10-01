import './Cadastro.css';
import api from '../../servicos/Api';
import { useRef, useState } from 'react';

function Cadastro() {

    const inputName = useRef();
    const inputAge = useRef();
    const inputEmail = useRef();
    const inputPassword = useRef();
    const [errorMessage, setErrorMessage] = useState('');

    async function createUsers() {
        // Validação dos campos
        const name = inputName.current.value.trim();
        const age = inputAge.current.value.trim();
        const email = inputEmail.current.value.trim();
        const password = inputPassword.current.value.trim();

        if (!name || !age || !email || !password) {
            setErrorMessage('Todos os campos são obrigatórios.');
            return;  // Interrompe o envio se faltar dados
        }

        // Se os campos estiverem preenchidos, limpa a mensagem de erro
        setErrorMessage('');

        try {
            // Verifica se o usuário já está cadastrado pelo email
            const response = await api.get(`/usuarios?email=${email}`);

            if (response.data.length > 0) {
                setErrorMessage('E-mail de usuário já cadastrado.');
                return;  // Interrompe o cadastro se o email já existir
            }

            // Se não existir, realiza o cadastro
            await api.post('/usuarios', {
                name: inputName.current.value,
                age: inputAge.current.value,
                email: inputEmail.current.value,
                password: inputPassword.current.value
            });

            alert('Usuário cadastrado com sucesso!');
            window.location.href = '/login-users';

            

        } catch (error) {
            // Captura a mensagem de erro específica do backend
            if (error.response && error.response.data && error.response.data.message) {
                setErrorMessage(error.response.data.message); // Mensagem específica do backend
            } else {
                setErrorMessage('Erro ao cadastrar usuário.');
            }
        }
    }

    return (
        <div className='container-cadastro'>
            <form className='form-cadastro'>
                <h1>Cadastro de Usuários</h1>
                <input placeholder='Nome' name='nome' type='text' ref={inputName} />
                <input placeholder='Idade' name='idade' type='number' ref={inputAge} />
                <input placeholder='E-mail' name='e-mail' type='email' ref={inputEmail} />
                <input placeholder='Senha' name='senha' type='password' ref={inputPassword} />

                {/* Exibir mensagem de erro se os campos não forem preenchidos ou se o usuário já existir */}
                {errorMessage && <p className='error-message'>{errorMessage}</p>}

                <button type='button' onClick={createUsers}>Cadastrar</button>
            </form>
        </div>
    )
}

export default Cadastro;
