import { ApiDefault } from "../../api/ApiBasic";
import { ObjetoError } from "../../utils/Error";
import { Error } from "../../Error/Error";

export const FiltrarProjetos = async function (Gerente = undefined, Setor = undefined, Ccusto = undefined) {
  try {
    console.log(Gerente, Setor, Ccusto)
    const projetos = await ApiDefault.post(`/projeto/filtrar/projetos`, {
      gerente: Gerente,
      setor: Setor,
      ccusto: Ccusto
    });
    return projetos.data;
  } catch (error) {
    const ErrorResponse = error.response.status;
    if (ErrorResponse >= 400 && ErrorResponse <= 403) {
      throw Error.ErrorAuth()
    }
    if (ErrorResponse >= 404 && ErrorResponse >= 500) {
      throw Error.ErrorServer();
    }
  }
}
