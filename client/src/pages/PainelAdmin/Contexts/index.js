import { createContext, useState } from "react";
import { BuscarProjetos as BuscarTodosProjetos } from "../../../server/Projeto/BuscarProjetos";
import { BuscarRegistroseProjetos as BuscarTodosRegistroseProjetos } from "../../../server/Projeto/BuscarRegistroseProjetos";
import { BuscarRegistroseProjetos as FiltrarRegistros } from "../../../server/Registro/Filtrar";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {

    const [Projetos, setProjetos] = useState(0);
    const [Registros, setRegistros] = useState(0);

    const BuscarProjetos = async function () {
        const Projetos_ = await BuscarTodosProjetos();
        console.log('te5454dte', Projetos_)
        setProjetos(Projetos_)
    }

    const BuscarRegistroseProjetos = async function () {
        const Registros_ = await BuscarTodosRegistroseProjetos();
        setRegistros(Registros_)
    }

    const Filtrar = async function ({ data, setor, ccusto, Email }) {
        const Projeto = await FiltrarRegistros(data, setor, ccusto);
        console.log('tedte', Projeto)
        setProjetos(Projeto);
    }

    return (
        <AuthContext.Provider value={{ Filtrar, BuscarProjetos, Projetos, BuscarRegistroseProjetos, Registros }}>
            {children}
        </AuthContext.Provider>
    )
}
