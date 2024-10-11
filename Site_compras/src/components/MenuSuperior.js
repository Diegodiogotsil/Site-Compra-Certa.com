import React from 'react';
import './pages/Perfil.css';
import chefinho from '../img/chefinho.jpeg'; // Aqui você pode alterar para a foto do usuário mais tarde
import { useSelector } from 'react-redux';


const MenuSuperior = () => {

    const currentUser = useSelector((state) => state.user.currentUser);

    return (

        <div className='cabecalho-perfil'>
            <div className='div-foto-nome'>
                <img src={chefinho} alt="Usuário" />
                {currentUser ? (
                    <div>
                        <h2>Olá, {currentUser.name}</h2>
                    </div>
                ) : (
                    <div >
                        <h2>Olá, seja bem vindo</h2>
                    </div>
                )}
            </div>
            <div>
                <h1>Compra certa.com</h1>
            </div>
            <div>
                <h1>Mensagens</h1>
            </div>
        </div>

    )
}

export default MenuSuperior