import { createContext, useState } from "react";
import { BuscarRegistros as BuscarTodosRegistros } from "../../../server/Registro/BuscarTodos";
import { NovoRegistro as NovoRegistro_ } from "../../../server/Registro/NovoRegistro";
import { BuscarProjetos as BuscarTodosProjetos } from '../../../server/Projeto/BuscarProjetos';
import { BuscarRegistrosDesteMes } from "../../../server/Registro/BuscarTodosDesteMes";

export const AuthContext = createContext();

export const AuthContextProvider = function ({ children }) {
  const [Filtro, setFiltro] = useState();

  const BuscarRegistros = async function () {
    const Registros_ = await BuscarTodosRegistros();
    return Registros_.data;
  }

  const NovoRegistro = async function (IRegistros) {
    const resp = await NovoRegistro_(IRegistros);
    return resp;
  }

  const BuscarProjetos = async function () {
    const projetos = await BuscarTodosProjetos();
    return projetos;
  }

  const BuscarTodosRegistrosPMes = async function () {
    const registros = await BuscarRegistrosDesteMes();
    return registros;
  }

  return (
    <AuthContext.Provider value={{ BuscarRegistros, NovoRegistro, BuscarProjetos, BuscarTodosRegistrosPMes }} >
      {children}
    </AuthContext.Provider>
  )
}
