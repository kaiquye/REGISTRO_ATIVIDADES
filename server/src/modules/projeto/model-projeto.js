const { ConnectionDatabase } = require('../../database/config');

class ModelProjeto {
  static async Criar(setor, descricao, inicio, gerente, centrodecusto) {
    try {
      const NumbersProjects = await ConnectionDatabase('projeto').count('id').first().where('setor', setor);
      const CheckManager = await ConnectionDatabase('projeto').count('id').first().where('gerente_id', gerente);
      if (NumbersProjects['count(`id`)'] >= 10) throw new Error('Setor com o numero maximo de projetos cadastrados.');
      if (CheckManager['count(`id`)'] >= 5) throw new Error('Um gerente não pode ser responsavel por mais de 5 projetos.');
      await ConnectionDatabase('projeto').insert({
        setor, descricao, inicio, gerente_id: gerente, centrodecusto_id: centrodecusto,
      });
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = ModelProjeto;
