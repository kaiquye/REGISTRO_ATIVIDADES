import { ApiDefault } from "../api/ApiBasic";
import { ObjetoError } from "../utils/Error";

export const BuscarProjetosCcustoGerente = async function () {
    try {
        const projetos = await ApiDefault.get('/projeto/gerente/projeto/ccusto');
        return projetos.data;
    } catch (error) {
        return ObjetoError(error.data.response.message, true);
    }
}