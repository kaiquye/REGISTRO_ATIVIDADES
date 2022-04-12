import { ApiDefault } from "../../api/ApiBasic";
import { ObjetoError } from "../../utils/Error";

export const FiltrarProjetos = async function (Gerente = undefined, Setor = undefined, Ccusto = undefined) {
    try {
        console.log(Gerente, Setor, Ccusto)
        const projetos = await ApiDefault.post(`/projeto/filtrar/projetos`, {
            gerente: Gerente,
            setor: Setor,
            ccusto: Ccusto
        });
        return projetos.data;
    } catch (error) {
        console.log({ error })
        console.log(error.response.data.message)
        return ObjetoError(error.data.response.message, true);
    }
}