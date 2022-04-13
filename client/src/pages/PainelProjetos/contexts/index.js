import { createContext, useState } from "react";
import { BuscarProjetosCcustoGerente } from "../../../server/Projeto/BuscarProjetosCcustoGerente";
import { FiltrarProjetos as Filtrar } from "../../../server/Projeto/Filtrar";

export const AuthContext = createContext();

export const AuthContextProvider = function ({ children }) {
    const [Projetos, setProjetos] = useState();

    const BuscarProjetos = async function () {
        const Projetos_ = await BuscarProjetosCcustoGerente();
        setProjetos(Projetos_.data);
    }
    const FiltrarProjetos = async function (Gerente, Setor, Ccusto) {
        console.log('G',Gerente, 's',Setor, Ccusto)
        const Projetos_ = await Filtrar(Gerente, Setor, Ccusto);
        console.log('teste', Projetos_)
        setProjetos(Projetos_.data)
    }

    return (
        <AuthContext.Provider value={{ Projetos, BuscarProjetos, FiltrarProjetos }} >
            {children}
        </AuthContext.Provider>
    )
}