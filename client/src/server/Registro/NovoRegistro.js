import { ApiDefault } from "../../api/ApiBasic";
import { Error } from "../../Error/Error";

export const NovoRegistro = async function ({ assunto, inicio, termino, projeto }) {
  console.log(assunto, termino, projeto)
  try {
    await ApiDefault.post('/registro', {
      assunto,
      inicio,
      termino,
      projeto
    });
    return true;
  } catch (error) {
    console.log(error.response.data.message)
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
