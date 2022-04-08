const { ConnectionDatabase } = require('../../database/config');

class DatabaseModel {
  static async Criar(assunto, funcionario, email, projeto, inicio, termino, Decorrido) {
    try {
      // ConnectionDatabase.transaction(async (trx) => {
      //   await ConnectionDatabase('registros').transacting(trx).insert({
      //     assunto, funcionario_id: funcionario, email, projeto_id: projeto, inicio, termino,
      //   })
      //   await ConnectionDatabase('centrodecusto').transacting(trx).update({
      //   })
      // });     
      await ConnectionDatabase
        .insert({
          assunto, funcionario_id: funcionario, email, projeto_id: projeto, inicio, termino,
        })
        .from('registros');
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
