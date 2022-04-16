import { ApiDefault } from "../../api/ApiBasic";
import { ErrorAuth } from "../../Error/Error";
import { Error } from "../../Error/Error";

export const BuscarTodosCcustos = async function () {
  try {
    const projetos = await ApiDefault.get('/centrodecusto');
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
