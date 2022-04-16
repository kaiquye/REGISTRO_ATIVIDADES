import { ApiDefault } from "../../api/ApiBasic";
import { ObjetoError } from "../../utils/Error";
import { getToken } from "../../configs/ReactAdal";
import { Error } from "../../Error/Error";

export const BuscarProjetosCcustoGerente = async function () {
  try {

    const projetos = await ApiDefault.get('/projeto/gerente/projeto/ccusto');
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
