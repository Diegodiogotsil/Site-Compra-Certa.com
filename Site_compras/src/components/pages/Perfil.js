import React from 'react';
import './Perfil.css';
import chefinho from '../../img/chefinho.jpeg'; // Aqui você pode alterar para a foto do usuário mais tarde
import { useSelector } from 'react-redux';

const Perfil = () => {
    // Acessando o usuário atual a partir do Redux
    const currentUser = useSelector((state) => state.user.currentUser);

    // Verifica se currentUser está disponível antes de tentar acessar seus dados
    if (!currentUser) {
        return <div>Carregando dados do usuário...</div>; // Mostra uma mensagem enquanto carrega
    }

    return (
        <div className='pagina-perfil'>
            <div className='div-perfil'>
                <div className='conteudo-perfil'>
                    <img src={chefinho} alt="Usuário"/>                                    
                    <div>
                        <h1>{currentUser.name}</h1> {/* Nome do usuário do Redux */}
                        <h2>Cliente desde: {currentUser.age} anos</h2> {/* Idade do usuário */}
                        <h2>Categoria do cliente: Premium</h2> {/* Informação extra */}
                    </div>
                </div>
                <div>
                    <h1>Informações de contato</h1>
                    <h2>Endereço: Rua Exemplo, 123</h2> {/* Adicionar dados conforme necessário */}
                    <h2>Telefone: (00) 1234-5678</h2>
                    <h2>E-mail: {currentUser.email}</h2> {/* Email do usuário do Redux */}
                </div>
            </div>
        </div>
    );
};

export default Perfil;
