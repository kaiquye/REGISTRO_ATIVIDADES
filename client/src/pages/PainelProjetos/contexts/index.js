import { createContext, useState } from "react";
import { BuscarProjetosCcustoGerente } from "../../../server/BuscarProjetosCcustoGerente";
import { BuscarTodosGerentes } from "../../../server/BuscarTodosGerentes";

export const AuthContext = createContext();

export const AuthContextProvider = function ({ children }) {
    const [Projetos, setProjetos] = useState();

    const BuscarProjetos = async function () {
        const Projetos_ = await BuscarProjetosCcustoGerente();
        setProjetos(Projetos_.data);
    }

    return (
        <AuthContext.Provider value={{ Projetos, BuscarProjetos }} >
            {children}
        </AuthContext.Provider>
    )
}