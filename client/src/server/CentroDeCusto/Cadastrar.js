import { ApiDefault } from "../../api/ApiBasic";
import { ObjetoError } from "../../utils/Error";

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
        alert(error.response.data.message)
        return ObjetoError(error.data.response.message, true);
    }
}