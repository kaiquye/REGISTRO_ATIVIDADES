const { ConnectionDatabase } = require('../../database/config');

class DatabaseModel {
  static async Criar(assunto, funcionario, email, projeto, inicio, termino, Decorrido) {
    try {
      return await ConnectionDatabase.transaction(async (trx) => {
        const IdCcusto = await ConnectionDatabase('projeto').transacting(trx).select('centrodecusto_id').where('id', projeto);
        await ConnectionDatabase('registros').transacting(trx).insert({
          assunto, funcionario_id: funcionario, email, projeto_id: projeto, inicio, termino,
        });
        await ConnectionDatabase('centrodecusto').transacting(trx).where('id', IdCcusto[0]['centrodecusto_id']).increment('decorrido', Decorrido);
      });
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async Deletar(Id) {
    const sql = 'delete from alocacoes where id = ?';
    try {
      await ConnectionDatabase.raw(sql, [Id]);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async Atualizar(TokenRegistro, assunto, funcionario, email, projeto, inicio, termino) {
    try {
      await ConnectionDatabase('registros').update(assunto, funcionario, email, projeto, inicio, termino)
        .where({ TokenRegistro });
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async BuscarTodos() {
    try {
      await ConnectionDatabase('registros').orderBy('inicio').first();
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async Buscar(TokenRegistro) {
    try {
      await ConnectionDatabase('registros').where({ TokenRegistro }).first();
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = DatabaseModel;
