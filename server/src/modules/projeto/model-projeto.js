const { ConnectionDatabase } = require('../../database/config');
const Filtros = require('../../utils/Filtros');

class ModelProjeto {
  static async Criar(setor, descricao, inicio, gerente, centrodecusto, decorrido) {
    try {
      // converter o numero decorrido em dias.
      const NumbersProjects = await ConnectionDatabase('projeto').count('id').first().where('setor', setor);
      const CheckManager = await ConnectionDatabase('projeto').count('id').first().where('gerente_id', gerente);
      if (NumbersProjects['count(`id`)'] >= 10) return new Error('Setor com o numero maximo de projetos cadastrados.');
      if (CheckManager['count(`id`)'] >= 5) return new Error('Um gerente não pode ser responsavel por mais de 5 projetos.');
      return await ConnectionDatabase('projeto').insert({
        setor, descricao, inicio, gerente_id: gerente, centrodecusto_id: centrodecusto, decorrido,
      });
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async Buscar(Id) {
    try {
      return await ConnectionDatabase('projeto').select('*').where('id', Id);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async BuscarTodos() {
    try {
      return await ConnectionDatabase('projeto').select('*');
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async BuscarProjetoseGerenteseCcusto() {
    const SQL = 'SELECT projeto.*, gerente.nome as gerente, ccusto.setor as setor_ccusto from projeto inner join gerente on projeto.gerente_id = gerente.id  inner join centrodecusto as ccusto on  ccusto.id = projeto.centrodecusto_id';
    const SQLgrt = 'select * from gerente GROUP BY nome';
    const SQlccusto = 'select * from centrodecusto GROUP BY setor';
    try {
      return await ConnectionDatabase.transaction(async (trx) => {
        const projeto = await ConnectionDatabase.raw(SQL).transacting(trx);
        const gerente = await ConnectionDatabase.raw(SQLgrt).transacting(trx);
        const ccusto = await ConnectionDatabase.raw(SQlccusto).transacting(trx);
        return ({ projeto: projeto[0], gerente: gerente[0], ccusto: ccusto[0] });
      });
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async FiltrarProjetos(gerente, setor, ccusto) {
  try {
    Filtros.Sql([{ campo: 'teste1', valor: 'tesad' }, { campo: 'teste1' }], [{ campo: 'teste1', sql: 'sqllllll' }, { campo: 'teste1' }]);
  } catch (error) {
    return console.log('ted',error);
  }y
  }

}

module.exports = ModelProjeto;
