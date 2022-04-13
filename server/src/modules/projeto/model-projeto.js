const { ConnectionDatabase } = require('../../database/config');
const Construir = require('../../utils/Construir');

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
        // retornando todos os projetos.
        const projeto = await ConnectionDatabase.raw(SQL).transacting(trx);
        // retornando valores para popular o filtro de busca.
        const gerente = await ConnectionDatabase.raw(SQLgrt).transacting(trx);
        // retornando valores para popular o filtro de busca.
        const ccusto = await ConnectionDatabase.raw(SQlccusto).transacting(trx);
        return ({ projeto: projeto[0], gerente: gerente[0], ccusto: ccusto[0] });
      });
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async Filtrars(Gerente = 2, Setor = undefined, Ccusto = undefined) {
    const SQL = 'SELECT projeto.*, gerente.nome as gerente, ccusto.setor as setor_ccusto from projeto inner join gerente on projeto.gerente_id = gerente.id  inner join centrodecusto as ccusto on  ccusto.id = projeto.centrodecusto_id';
    const SqlByGenreteByCcustoBySetor = 'SELECT projeto.*, gerente.nome as gerente, ccusto.setor as setor_ccusto from projeto inner join gerente on projeto.gerente_id = gerente.id  inner join centrodecusto as ccusto on  ccusto.id = projeto.centrodecusto_id where projeto.gerente_id  = ?  and projeto.centrodecusto_id = ? and projeto.setor = ? ';
    const SqlByCcustoBysetor = 'SELECT projeto.*, gerente.nome as gerente, ccusto.setor as setor_ccusto from projeto inner join gerente on projeto.gerente_id = gerente.id  inner join centrodecusto as ccusto on  ccusto.id = projeto.centrodecusto_id where projeto.centrodecusto_id  = ? and projeto.Setor = ?  ';
    const SqlByGerenteByCcusto = 'SELECT projeto.*, gerente.nome as gerente, ccusto.setor as setor_ccusto from projeto inner join gerente on projeto.gerente_id = gerente.id  inner join centrodecusto as ccusto on  ccusto.id = projeto.centrodecusto_id where projeto.gerente_id = ? and projeto.centrodecusto_id ';
    const SqlByGerenteBySetor = 'SELECT projeto.*, gerente.nome as gerente, ccusto.setor as setor_ccusto from projeto inner join gerente on projeto.gerente_id = gerente.id  inner join centrodecusto as ccusto on  ccusto.id = projeto.centrodecusto_id where projeto.gerente_id  = ? and projeto.setor =  ?  ';
    const SqlBySetor = 'SELECT projeto.*, gerente.nome as gerente, ccusto.setor as setor_ccusto from projeto inner join gerente on projeto.gerente_id = gerente.id  inner join centrodecusto as ccusto on  ccusto.id = projeto.centrodecusto_id where projeto.setor  = ? ';
    const SqlByCcusto = 'SELECT projeto.*, gerente.nome as gerente, ccusto.setor as setor_ccusto from projeto inner join gerente on projeto.gerente_id = gerente.id  inner join centrodecusto as ccusto on  ccusto.id = projeto.centrodecusto_id where projeto.Ccusto  = ? ';
    const SqlByGerente = 'SELECT projeto.*, gerente.nome as gerente, ccusto.setor as setor_ccusto from projeto inner join gerente on projeto.gerente_id = gerente.id  inner join centrodecusto as ccusto on  ccusto.id = projeto.centrodecusto_id where projeto.gerente_id  = ? ';
    const SQLgrt = 'select * from gerente GROUP BY nome';
    const SQlccusto = 'select * from centrodecusto GROUP BY setor';
    try {
      return await ConnectionDatabase.transaction(async (trx) => {
        let projeto;
        let gerente;
        let ccusto;
        if (Gerente && Setor.length && Ccusto > 0) {
          projeto = await ConnectionDatabase
            .raw(SqlByGenreteByCcustoBySetor, [Gerente, Setor, Ccusto]).transacting(trx);
          gerente = await ConnectionDatabase.raw(SQLgrt).transacting(trx);
          ccusto = await ConnectionDatabase.raw(SQlccusto).transacting(trx);
        } else if (Gerente && Setor.length > 0) {
          projeto = await ConnectionDatabase
            .raw(SqlByGerenteBySetor, [Gerente, Setor]).transacting(trx);
          gerente = await ConnectionDatabase.raw(SQLgrt).transacting(trx);
          ccusto = await ConnectionDatabase.raw(SQlccusto).transacting(trx);
        } else if (Gerente && Ccusto > 0) {
          projeto = await ConnectionDatabase
            .raw(SqlByGerenteByCcusto, [Gerente, Ccusto]).transacting(trx);
          gerente = await ConnectionDatabase.raw(SQLgrt).transacting(trx);
          ccusto = await ConnectionDatabase.raw(SQlccusto).transacting(trx);
        } else if (Setor && Ccusto > 0) {
          projeto = await ConnectionDatabase
            .raw(SqlByCcustoBysetor, [Ccusto, Setor]).transacting(trx);
          gerente = await ConnectionDatabase.raw(SQLgrt).transacting(trx);
          ccusto = await ConnectionDatabase.raw(SQlccusto).transacting(trx);
        } else if (Setor.length > 0) {
          projeto = await ConnectionDatabase.raw(SqlBySetor, [Setor]).transacting(trx);
          gerente = await ConnectionDatabase.raw(SQLgrt).transacting(trx);
          ccusto = await ConnectionDatabase.raw(SQlccusto).transacting(trx);
        } else if (Gerente > 0) {
          projeto = await ConnectionDatabase.raw(SqlByGerente, [Gerente]).transacting(trx);
          gerente = await ConnectionDatabase.raw(SQLgrt).transacting(trx);
          ccusto = await ConnectionDatabase.raw(SQlccusto).transacting(trx);
        } else if (Ccusto > 0) {
          projeto = await ConnectionDatabase.raw(SqlByCcusto, [Ccusto]).transacting(trx);
          gerente = await ConnectionDatabase.raw(SQLgrt).transacting(trx);
          ccusto = await ConnectionDatabase.raw(SQlccusto).transacting(trx);
        } else {
          projeto = await ConnectionDatabase.raw(SQL).transacting(trx);
          gerente = await ConnectionDatabase.raw(SQLgrt).transacting(trx);
          ccusto = await ConnectionDatabase.raw(SQlccusto).transacting(trx);
        }
        return ({ projeto: projeto[0], gerente: gerente[0], ccusto: ccusto[0] });
      });
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async FIltrar(Gerente, Ccusto, Setor) {
    const SQLgrt = 'select * from gerente GROUP BY nome';
    const SQlccusto = 'select * from centrodecusto GROUP BY setor';
    const Sql = 'SELECT projeto.*, gerente.nome as gerente, ccusto.setor as setor_ccusto from projeto'
      + ' inner join gerente on projeto.gerente_id = gerente.id'
      + ' inner join centrodecusto as ccusto on  ccusto.id = projeto.centrodecusto_id';
    try {
      // construindo query de busca.
      const { Bindings, Query } = Construir.Querys(Gerente, Ccusto, Setor);
      console.log('tedted',Bindings)
      return await ConnectionDatabase.transaction(async (trx) => {
        // buscando o projeto com base nos filtros
        if (Bindings.length) {
          var projeto = await ConnectionDatabase.raw(Query, [...Bindings]).transacting(trx);
        } else {
          var projeto = await ConnectionDatabase.raw(Sql).transacting(trx);
        }
        // retornando valores para popular o filtro de busca.
        const gerente = await ConnectionDatabase.raw(SQLgrt).transacting(trx);
        // retornando valores para popular o filtro de busca.
        const ccusto = await ConnectionDatabase.raw(SQlccusto).transacting(trx);
        console.log(projeto[0])
        return ({ projeto: projeto[0], gerente: gerente[0], ccusto: ccusto[0] });
      });
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = ModelProjeto;
