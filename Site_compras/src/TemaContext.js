// TemaContext.js
import { createContext, useState, useEffect } from 'react';

export const TemaContext = createContext();

export const TemaProvider = ({ children }) => {
    const [tema, setTema] = useState('claro');

    useEffect(() => {
        // Verifica se há um tema salvo no localStorage e aplica
        const temaSalvo = localStorage.getItem('tema');
        if (temaSalvo) {
            setTema(temaSalvo);
        }
    }, []);

    const toggleTema = () => {
        const novoTema = tema === 'claro' ? 'escuro' : 'claro';
        setTema(novoTema);
        localStorage.setItem('tema', novoTema);  // Salva o tema no localStorage
    };

    return (
        <TemaContext.Provider value={{ tema, toggleTema }}>
            {children}
        </TemaContext.Provider>
    );
};
