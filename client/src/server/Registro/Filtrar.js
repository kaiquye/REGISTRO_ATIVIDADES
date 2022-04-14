import { ApiDefault } from "../../api/ApiBasic";
import { ObjetoError } from "../../utils/Error";

export const BuscarRegistroseProjetos = async function () {
    try {
        const projetos = await ApiDefault.get('/registro/filtrar/registros');
        console.log(projetos)
        return projetos.data;
    } catch (error) {
        alert(error.response.data.message)
        return ObjetoError(error.data.response.message, true);
    }
}