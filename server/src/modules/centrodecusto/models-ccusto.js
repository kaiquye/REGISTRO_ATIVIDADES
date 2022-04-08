const { ConnectionDatabase } = require('../../database/config');

class DatabaseModel {
  static async Criar(setor, gastos, livres, empresa) {
    try {
      await ConnectionDatabase.insert({
        setor, gastos, livres, empresa,
      }).from('centrodecusto');
    } catch (error) {
      throw new Error('Erro.');
    }
  }

  static async Deletar(TokenCcusto) {
    const SQL = 'delete from centrodecusto where token_ccusto = ?';
    try {
      await ConnectionDatabase.raw(SQL, [TokenCcusto]);
    } catch (error) {
      throw new Error('Erro.');
    }
  }

  static async Atualizar(TokenCcusto, setor, gastos, livres, empresa) {
    try {
      await ConnectionDatabase('centrodecusto').update(setor, gastos, livres, empresa)
        .where({ token_ccusto: TokenCcusto });
    } catch (error) {
      throw new Error('Erro.');
    }
  }

  static async BuscarTodos() {
    try {
      await ConnectionDatabase('centrodecusto');
    } catch (error) {
      throw new Error('Erro.');
    }
  }

  static async Buscar(Id) {
    try {
      await ConnectionDatabase('centrodecusto').where({ id: Id }).first();
    } catch (error) {
      throw new Error('Erro.');
    }
  }
}
module.exports = DatabaseModel;
