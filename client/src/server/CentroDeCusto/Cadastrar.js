import { ApiDefault } from "../../api/ApiBasic";
import { ObjetoError } from "../../utils/Error";
import { Error } from "../../Error/Error";

export const CadastrarCcusto = async function ({ setor, gastos = 0, livres, empresa, status, decorrido = 0 }) {
  try {
    await ApiDefault.post('/centrodecusto', {
      setor,
      gastos,
      livres,
      empresa,
      status,
      decorrido
    });
    alert('Boostrap alert. Cadastrado')
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
