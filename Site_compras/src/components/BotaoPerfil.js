import React from 'react';
import chefinho from '../img/chefinho.jpeg'; // Aqui você pode alterar para a foto do usuário mais tarde
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const BotaoPerfil = () => {

    const navigate = useNavigate();
    const PerfilPage = () => {
        navigate('/perfil');
    };

    const currentUser = useSelector((state) => state.user.currentUser);

    return (

        <div className='cabecalho-perfil'>
            <div>
                {currentUser ? (
                    <div className='div-principal-image-login'>
                        <div className="tooltip-container" onClick={PerfilPage}>
                            <div className='div-foto-nome'>
                                <img src={chefinho} alt="Usuário" />                             
                            </div>
                            <span className="tooltip-text2">Ir para pagina de perfil</span>
                        </div>
                        <div>
                            <h2>Olá, {currentUser.name}</h2>
                        </div>
                    </div>
                ) : (
                    <div >
                        <h2>Olá, seja bem vindo</h2>
                    </div>
                )}
            </div>

        </div>

    )
}

export default BotaoPerfil