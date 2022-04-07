const { ConnectionDatabase } = require('../../database/config');

class DatabaseModel{

    async Criar(token_registro, assunto, funcionario, email, projeto, inicio ,termino){
        try {
            await ConnectionDatabase
            .insert({token_registro, assunto, funcionario, email, projeto, inicio, termino})
            .from('registros')         
        } catch (error) {
            throw new Error('Erro.')
        }
    }

    async Deletar(token_registro){
        let sql = `delete from alocacoes where token_registro = ?`
        try {
            await ConnectionDatabase.raw(sql, [token_registro])
        } catch (error) {
            throw new Error('Erro.')
        }
    }

    async Atualizar(token_registro, assunto, funcionario, email, projeto, inicio ,termino){
        try {
            await ConnectionDatabase('registros').update( assunto, funcionario, email, projeto, inicio ,termino)
            .where({token_registro : token_registro})
        } catch (error) {
            throw new Error('Erro.')
        }
    }

    async BuscarTodos(){
        try {
            await ConnectionDatabase('registros').orderBy('inicio').first();
        } catch (error) {
            throw new Error('Erro.')
        }
    }

    async BuscarPorToken(token_registro){
        try {
            await ConnectionDatabase('registros').where({token_registro : token_registro}).first()
        } catch (error) {
            throw new Error('Erro.')
        }
    }

}

module.exports = new DatabaseModel()

