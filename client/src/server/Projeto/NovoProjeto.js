import { ApiDefault } from "../../api/ApiBasic";
import { ObjetoError } from "../../utils/Error";

export const iProjeto = {
    setor: '',
    descricao: '',
    inicio: new Date(),
    ccusto: 0,
    gerente: 0
};

export const NovoProjeto = async function (iProjeto) {
    console.log(iProjeto);
    try {
        const projetos = await ApiDefault.post('/projeto',{
            setor : iProjeto.setor,
            descricao : iProjeto.descricao,
            ccusto : iProjeto.ccusto,
            gerente : iProjeto.gerente,
            inicio : iProjeto.inicio
        });
        return projetos.data;
    } catch (error) {
        console.log(error.response.data.message)
        return new Error('tedted')
    }
}