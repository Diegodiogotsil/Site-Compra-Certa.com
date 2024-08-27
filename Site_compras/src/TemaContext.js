import { createContext, useState } from "react";

export const TemaContext = createContext();

export const TemaProvider = ({ children }) => {
    const [tema, setTema] = useState("claro");

    const toggleTema = () => {
        setTema(tema === "claro" ? "escuro" : "claro");
    };

    return (
        <TemaContext.Provider value={{ tema, toggleTema }}>
            {children} {/* Corrigido: use 'children' aqui */}
        </TemaContext.Provider>
    );
};
