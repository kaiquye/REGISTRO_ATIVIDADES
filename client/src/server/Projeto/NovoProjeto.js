import { ApiDefault } from "../../api/ApiBasic";
import { ObjetoError } from "../../utils/Error";
import { Error } from "../../Error/Error";

export const NovoProjeto = async function (iProjeto) {
  console.log(iProjeto);
  try {
    const projetos = await ApiDefault.post('/projeto', {
      setor: iProjeto.setor,
      descricao: iProjeto.descricao,
      ccusto: iProjeto.ccusto,
      gerente: iProjeto.gerente,
      inicio: iProjeto.inicio
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
