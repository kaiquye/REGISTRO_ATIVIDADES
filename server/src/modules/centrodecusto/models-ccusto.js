const { ConnectionDatabase } = require('../../database/config');

class DatabaseModel {
  static async Criar(setor, gastos, livres, empresa) {
    try {
      const Setor = await ConnectionDatabase('centrodecusto').where('setor', setor).count('id').first();
      if (Setor['count(`id`)'] >= 1) throw new Error('Centro de custo do setor já cadastrado.');
      await ConnectionDatabase.insert({
        setor, gastos, livres, empresa,
      }).from('centrodecusto');
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async Deletar(TokenCcusto) {
    const SQL = 'delete from centrodecusto where token_ccusto = ?';
    try {
      await ConnectionDatabase.raw(SQL, [TokenCcusto]);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async Atualizar(TokenCcusto, setor, gastos, livres, empresa) {
    try {
      await ConnectionDatabase('centrodecusto').update(setor, gastos, livres, empresa)
        .where({ token_ccusto: TokenCcusto });
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async BuscarTodos() {
    try {
      return await ConnectionDatabase('centrodecusto').select('*').where('status', 1);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async Buscar(Id) {
    try {
      return await ConnectionDatabase('centrodecusto').where({ id: Id, status: 1 }).first();
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async BuscarCentroDeCustoEProjetos(Id) {
    const SQL = 'select * from centrodecusto inner join projeto on centrodecusto.id = centrodecusto_id where centrodecusto.id = ?;';
    try {
      const CcustoProjetos = await ConnectionDatabase.raw(SQL, [Id]);
      return CcustoProjetos[0];
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
module.exports = DatabaseModel;
