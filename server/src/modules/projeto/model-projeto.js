const { ConnectionDatabase } = require('../../database/config');

class ModelProjeto {
  static async Criar(setor, descricao, inicio, gerente, centrodecusto) {
    try {
      const NumbersProjects = await ConnectionDatabase('projeto').count('id').first().where('setor', setor);
      const CheckManager = await ConnectionDatabase('projeto').count('id').first().where('gerente_id', gerente);
      if (NumbersProjects['count(`id`)'] >= 10) return new Error('Setor com o numero maximo de projetos cadastrados.');
      if (CheckManager['count(`id`)'] >= 5) return new Error('Um gerente não pode ser responsavel por mais de 5 projetos.');
      return await ConnectionDatabase('projeto').insert({
        setor, descricao, inicio, gerente_id: gerente, centrodecusto_id: centrodecusto,
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
}

module.exports = ModelProjeto;
