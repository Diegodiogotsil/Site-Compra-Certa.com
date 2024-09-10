import './Cadastro.css';
import api from '../../servicos/Api';
import lixeira from '../../img/lixeira2.png';
import axios from 'axios';
import { useEffect } from 'react';
function Cadastro() {
    let users = []

    async function getUsers(){
        users = await api.get ('/usuarios')
    }

    useEffect (() =>{
        getUsers()
    }, [])
    return (
        <div className='container-cadastro'>
            <form className='form-cadastro'>
                <h1>Cadastro de Usuarios</h1>
                <input placeholder='Nome' name='nome' type='text' />
                <input placeholder='Idade' name='idade' type='number' />
                <input placeholder='E-mail' name='e-mail' type='email' />
                <button type='button'>Cadastrar</button>
            </form>

            {users.map(user => (
                <div key={user.id} className='card-cadastro'>
                    <div>
                        <p>Nome: <span>{user.name}</span></p>
                        <p>Idade: <span>{user.age}</span></p>
                        <p>E-Mail: <span>{user.email}</span></p>
                    </div>                   
                    <button>
                        <img src={lixeira} />
                    </button>
                </div>
            ))}

        </div>
    )
}


export default Cadastro
