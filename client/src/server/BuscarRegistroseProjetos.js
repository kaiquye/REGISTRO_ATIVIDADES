import { ApiDefault } from "../api/ApiBasic";
import { ObjetoError } from "../utils/Error";

export const BuscarRegistroseProjetos = async function () {
    try {
        const projetos = await ApiDefault.get('/registro/registro/projeto');
        return projetos.data;
    } catch (error) {
        return ObjetoError(error.data.response.message, true);
    }
}