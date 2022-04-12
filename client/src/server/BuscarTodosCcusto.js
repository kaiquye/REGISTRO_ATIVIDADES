import { ApiDefault } from "../api/ApiBasic";
import { ObjetoError } from "../utils/Error";

export const BuscarRegistroseProjetos = async function () {
    try {
        const projetos = await ApiDefault.get('/centrodecusto/');
        return projetos.data;
    } catch (error) {
        return ObjetoError(error.data.response.message, true);
    }
}