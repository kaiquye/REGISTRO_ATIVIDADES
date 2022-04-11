import { createContext, useState } from "react";
import { BuscarProjetosCcustoGerente } from "../../../server/BuscarProjetosCcustoGerente";

export const AuthContext = createContext();

export const AuthContextProvider = function ({ children }) {
    const [Projetos, setProjetos] = useState([]);

    const BuscarProjetos = async function () {
        const Projetos_ = await BuscarProjetosCcustoGerente();
        console.log('======',Projetos_.data);
        setProjetos(Projetos_);
    }

    return (
        <AuthContext.Provider value={{ Projetos, BuscarProjetos }} >
            {children}
        </AuthContext.Provider>
    )
}