import { createContext, useState } from "react";
import { BuscarRegistros as BuscarTodosRegistros } from "../../../server/Registro/BuscarTodos";
import { NovoRegistro } from "../../../server/Registro/NovoRegistro";


export const AuthContext = createContext();

export const AuthContextProvider = function ({ children }) {
  const [Filtro, setFiltro] = useState();

  const BuscarRegistros = async function () {
    const Registros_ = await BuscarTodosRegistros();
    return Registros_.data;
  }

  const NovoRegistro = function () {
    await NovoRegistro();
  }

  return (
    <AuthContext.Provider value={{ BuscarRegistros, NovoRegistro }} >
      {children}
    </AuthContext.Provider>
  )
}
