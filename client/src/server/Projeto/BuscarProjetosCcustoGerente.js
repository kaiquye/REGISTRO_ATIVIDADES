import { ApiDefault } from "../../api/ApiBasic";
import { ObjetoError } from "../../utils/Error";
import { getToken } from "../../configs/ReactAdal";


export const BuscarProjetosCcustoGerente = async function () {
    try {
       
        const projetos = await ApiDefault.get('/projeto/gerente/projeto/ccusto');
        return projetos.data;
    } catch (error) {
        console.log({ error })
        return ObjetoError(error.data.response.message, true);
    }
}