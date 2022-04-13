import { ApiDefault } from "../../api/ApiBasic";
import { ObjetoError } from "../../utils/Error";

export const ApagarProjeto = async function (id) {
    try {
        await ApiDefault.delete('/projeto/' + id);
    } catch (error) {
        console.log(error.response.data.message)
        return ObjetoError(error.data.response.message, true);
    }
}