import './Cadastro.css';
import api from '../../servicos/Api';
import lixeira from '../../img/lixeira2.png';
import { useEffect, useState, useRef } from 'react';

function Cadastro() {
    const[users, setUsers] = useState ([])

    const inputName = useRef()
    const inputAge = useRef()
    const inputEmail = useRef()

    async function getUsers(){
        const usersFromApi = await api.get ('/usuarios')

        setUsers(usersFromApi.data)
    }
    async function createUsers(){
        
        await api.post ('/usuarios', {
            name: inputName.current.value,
            age: inputAge.current.value,
            email: inputEmail.current.value
        })

        getUsers()
      
    }

    async function deleteUsers(id){
        
        await api.delete (`/usuarios/${id}`)

        getUsers()
      
    }

    useEffect (() =>{
        getUsers()
    }, [])
    return (
        <div className='container-cadastro'>
            <form className='form-cadastro'>
                <h1>Cadastro de Usuarios</h1>
                <input placeholder='Nome' name='nome' type='text' ref={inputName} />
                <input placeholder='Idade' name='idade' type='number' ref={inputAge}/>
                <input placeholder='E-mail' name='e-mail' type='email' ref={inputEmail} />
                <button type='button' onClick={createUsers}>Cadastrar</button>
            </form>

            {users.map(user => (
                <div key={user.id} className='card-cadastro'>
                    <div>
                        <p>Nome: <span>{user.name}</span></p>
                        <p>Idade: <span>{user.age}</span></p>
                        <p>E-Mail: <span>{user.email}</span></p>
                    </div>                   
                    <button onClick={() => deleteUsers(user.id)}>
                        <img src={lixeira} />
                    </button>
                </div>
            ))}

        </div>
    )
}


export default Cadastro
