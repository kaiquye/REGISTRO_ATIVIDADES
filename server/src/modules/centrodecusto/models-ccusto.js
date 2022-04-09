const { ConnectionDatabase } = require('../../database/config');

class DatabaseModel {
  static async Criar(setor, gastos, livres, empresa) {
    try {
      const Setor = await ConnectionDatabase('centrodecusto').where('setor', setor).count('id').first();
      if (Setor['count(`id`)'] >= 1) return new Error('Centro de custo do setor já cadastrado.');
      return await ConnectionDatabase.insert({
        setor, gastos, livres, empresa,
      }).from('centrodecusto');
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async Deletar(Id) {
    const SQL = 'delete from centrodecusto where token_ccusto = ?';
    try {
      await ConnectionDatabase.raw(SQL, [Id]);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async Atualizar(Id, setor, gastos, livres, empresa) {
    try {
      const centrodecusto = await ConnectionDatabase('centrodecusto').select('id').where('id', Id);
      if (centrodecusto[0] !== undefined) return new Error('Centro de custo não foi encontrado.');
      return await ConnectionDatabase('centrodecusto').update(setor, gastos, livres, empresa)
        .where({ token_ccusto: Id });
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
