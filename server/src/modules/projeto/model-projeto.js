const { ConnectionDatabase } = require('../../database/config');

class ModelProjeto {
  static async Criar(setor, descricao, inicio, gerente, centrodecusto) {
    try {
      await ConnectionDatabase('projeto').insert({
        setor, descricao, inicio, gerente, centrodecusto,
      });
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = ModelProjeto;
