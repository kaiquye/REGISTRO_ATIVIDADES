const { ConnectionDatabase } = require('../../database/config');

class DatabaseModel{

    async Criar(setor, gastos, livres, empresa){
        try {
            await ConnectionDatabase
            .insert({setor, gastos, livres, empresa})
            .from('centrodecusto')         
        } catch (error) {
            throw new Error('Erro.')
        }
    }

    async Deletar(token_ccusto){
        let sql = `delete from centrodecusto where token_ccusto = ?`
        try {
            await ConnectionDatabase.raw(sql, [token_ccusto])
        } catch (error) {
            throw new Error('Erro.')
        }
    }

    async Atualizar(token_ccusto,setor, gastos, livres, empresa){
        try {
            await ConnectionDatabase('centrodecusto').update(setor, gastos, livres, empresa)
            .where({token_ccusto : token_ccusto})
        } catch (error) {
            throw new Error('Erro.')
        }
    }

    async BuscarTodos(){
        try {
            await ConnectionDatabase('centrodecusto')
        } catch (error) {
            throw new Error('Erro.')
        }
    }

    async BuscarPorToken(token_ccusto){
        try {
            await ConnectionDatabase('centrodecusto').where({token_ccusto : token_ccusto}).first()
        } catch (error) {
            throw new Error('Erro.')
        }
    }

}
module.exports = {
    Criar : new DatabaseModel().Criar,
    Buscar : new DatabaseModel().Deletar,
    Uptade : new DatabaseModel().Atualizar,
    BuscarTodos : new DatabaseModel().BuscarTodos,
    Buscar : new DatabaseModel().BuscarPorToken
}

