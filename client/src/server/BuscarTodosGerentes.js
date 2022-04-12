import { ApiDefault } from "../api/ApiBasic";
import { ObjetoError } from "../utils/Error";

export const BuscarTodosGerentes = async function () {
    try {
        const projetos = await ApiDefault.get('/gerente');
        return projetos.data;
    } catch (error) {
        return ObjetoError(error.data.response.message, true);
    }
}