import { createContext, useState } from "react";
import { BuscarProjetos as BuscarTodosProjetos } from "../../../server/Projeto/BuscarProjetos";
import { BuscarRegistroseProjetos as BuscarTodosRegistroseProjetos } from "../../../server/Projeto/BuscarRegistroseProjetos";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {

    const [Projetos, setProjetos] = useState();
    const [Registros, setRegistros] = useState();

    const BuscarProjetos = async function () {
        const Projetos_ = await BuscarTodosProjetos();
        setProjetos(Projetos_)
    }

    const BuscarRegistroseProjetos = async function () {
        const Registros_ = await BuscarTodosRegistroseProjetos();
        console.log('tedte',Registros_)
        setRegistros(Registros_)
    }

    return (
        <AuthContext.Provider value={{ BuscarProjetos, Projetos, BuscarRegistroseProjetos, Registros }}>
            {children}
        </AuthContext.Provider>
    )
}
