const { ConnectionDatabase } = require('../../database/config');

class DatabaseModel {
  static async Criar(assunto, funcionario, email, projeto, inicio, termino, Decorrido) {
    try {
      // tabela sem id = Apenas leitura. Com id : Editar, ler, modifcar, excluir.
      return await ConnectionDatabase.transaction(async (trx) => {
        await ConnectionDatabase('projeto').transacting(trx).increment('decorrido', Decorrido).where('id', projeto);
        const IdCcusto = await ConnectionDatabase('projeto').transacting(trx).select('centrodecusto_id').where('id', projeto);
        await ConnectionDatabase('registros').transacting(trx).insert({
          assunto,
          funcionario_id: funcionario,
          email,
          projeto_id: projeto,
          inicio,
          termino,
          decorrido: Decorrido,
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
      const Registros = await ConnectionDatabase('registros').select('*');
      return Registros;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async Buscar(inicio, email) {
    // A data esta sendo salva em UTC no banco de dados. O mes esta sendo calculado -1 ;
    const SQL = 'SELECT * FROM registros where MONTH(inicio) = ? and MONTH(termino) = ? and email = ?';
    try {
      const Registros = await ConnectionDatabase.raw(SQL, [inicio - 1, inicio - 1, email]);
      return Registros[0];
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async BuscarRegistroeProjetos() {
    const SQL = 'SELECT registros.*, projeto.setor  FROM registros inner join projeto on projeto_id = projeto.id';
    try {
      const RegistroseProjetos = await ConnectionDatabase.raw(SQL);
      return RegistroseProjetos[0];
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = DatabaseModel;
