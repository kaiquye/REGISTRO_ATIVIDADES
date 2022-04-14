import { ApiDefault } from "../../api/ApiBasic";
import { ObjetoError } from "../../utils/Error";

export const BuscarProjetos = async function () {
    try {
        const projetos = await ApiDefault.get('/projeto');
        return projetos.data;
    } catch (error) {
        console.log({ error })
        alert(error.response.data.message)
        return ObjetoError(error.data.response.message, true);
    }
}