import './LoginADM.css';
import api from '../../servicos/Api';
import lixeira from '../../img/lixeira2.png';
import { useEffect, useState } from 'react';



function LoginADM() {

    const [users, setUsers] = useState([])

    async function deleteUsers(id) {

        await api.delete(`/usuarios/${id}`)

        getUsers()

    }

    async function getUsers() {
        const usersFromApi = await api.get('/usuarios')

        setUsers(usersFromApi.data)
    }

    useEffect(() => {
        getUsers()
    }, [])


    return (
        <div className='div-loginAdm'>
            {users.map((user) => (
                <div key={user.id} className="card-cadastro" >
                    <div>
                        <p>ID:<span>{user.id}</span></p>
                        <p>Nome: <span>{user.name}</span></p>
                        <p>Idade: <span>{user.age}</span></p>
                        <p>E-Mail: <span>{user.email}</span></p>
                    </div>
                    <button onClick={() => deleteUsers(user.id)}>
                        <img src={lixeira} alt="Excluir usuário" />
                    </button>
                </div>
            ))}
        </div>
    );
}


export default LoginADM