const { ConnectionDatabase } = require('../../database/config');

class DatabaseModel {
  static async Criar(TokenRegistro, assunto, funcionario, email, projeto, inicio, termino) {
    try {
      await ConnectionDatabase
        .insert({
          TokenRegistro, assunto, funcionario, email, projeto, inicio, termino,
        })
        .from('registros');
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async Deletar(TokenRegistro) {
    const sql = 'delete from alocacoes where token_registro = ?';
    try {
      await ConnectionDatabase.raw(sql, [TokenRegistro]);
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
