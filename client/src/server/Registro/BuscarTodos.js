import { ApiDefault } from "../../api/ApiBasic";
import { Error } from "../../Error/Error";

export const BuscarRegistros = async function () {
  try {
    const projetos = await ApiDefault.get('/registro');
    return projetos.data;
  } catch (error) {
    const ErrorResponse = error.response.status;
    alert(ErrorResponse)
    if (ErrorResponse >= 400 && ErrorResponse <= 403) {
      throw Error.ErrorAuth()
    }
    if (ErrorResponse >= 404 && ErrorResponse <= 499) {
      throw Error.ErrorServer();
    }
    alert(ErrorResponse)
  }
}
