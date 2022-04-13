import { createContext, useState } from "react";
import { BuscarTodosGerentes } from "../../../server/Gerente/BuscarTodosGerentes";
import { BuscarProjetosCcustoGerente } from "../../../server/Projeto/BuscarProjetosCcustoGerente";
import { FiltrarProjetos as Filtrar } from "../../../server/Projeto/Filtrar";
import { BuscarTodosCcustos } from "../../../server/CentroDeCusto/BuscarTodosCcustos";
import { NovoProjeto } from "../../../server/Projeto/NovoProjeto";

export const iProjeto = {
    setor: '',
    descricao: '',
    inicio: new Date(),
    ccusto: 0,
    gerente: 0
};

export const AuthContext = createContext();

export const AuthContextProvider = function ({ children }) {
    const [Filtro, setFiltro] = useState();

    const BuscarProjetos = async function () {
        const Projetos_ = await BuscarProjetosCcustoGerente();
        return Projetos_.data;
    }
    const FiltrarProjetos = async function (Gerente, Setor, Ccusto) {
        const Projetos_ = await Filtrar(Gerente, Setor, Ccusto);
        console.log('asdasdasd', Projetos_.data)
        setFiltro(Projetos_.data)
    }
    const BuscarGerentes = async function () {
        const gerentes = await BuscarTodosGerentes();
        return gerentes;
    }
    const BuscarCcustos = async function () {
        const Ccustos = await BuscarTodosCcustos();
        console.log(Ccustos.data)
        return Ccustos.data;
    }
    const CadastrarProjeto = async function (iProjeto) {
        const Instace = await NovoProjeto(iProjeto);
        if (Instace instanceof Error) {
            return alert('Error.')
        } else {
            return document.location.reload();
        }
    }
    return (
        <AuthContext.Provider value={{ Filtro, BuscarProjetos, BuscarGerentes, FiltrarProjetos, BuscarCcustos, CadastrarProjeto }} >
            {children}
        </AuthContext.Provider>
    )
}