import { createContext, useState } from "react";
import { BuscarTodosCcustos } from "../../../server/CentroDeCusto/BuscarTodosCcustos";
import { CadastrarCcusto } from "../../../server/CentroDeCusto/Cadastrar";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {

    const [Ccustos, setCcusto] = useState(0);
    const [Registros, setRegistros] = useState(0);

    const Buscar = async function () {
        const ccusto = await BuscarTodosCcustos();
        console.log('tedte',ccusto)
        setCcusto(ccusto)
    }

    const Cadastrar = async function (ICcusto) {
        await CadastrarCcusto(ICcusto);
    }

    // const Filtrar = async function ({ data, setor, ccusto, Email }) {
    //     const ccusto = await FiltrarRegistros(data, setor, ccusto);
    //     setCcusto(ccusto)
    // }

    return (
        <AuthContext.Provider value={{ Ccustos, Buscar, Cadastrar }}>
            {children}
        </AuthContext.Provider>
    )
}
