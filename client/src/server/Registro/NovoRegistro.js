import { ApiDefault } from "../../api/ApiBasic";
import { Error } from "../../Error/Error";

export const NovoRegistro = async function (IRegistro) {
  try {
    await ApiDefault.post('/registro', {
      assunto: IRegistro.assunto,
      termino: IRegistro.termino,
      projeto: IRegistro.projeto,
    });
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
