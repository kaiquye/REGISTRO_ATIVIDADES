const Model = require('./model-projeto');

class ServicosProjeto {
  static async Criar(setor, descricao, inicio, gerente, centrodecusto) {
    try {
      await Model.Criar(setor, descricao, inicio, gerente, centrodecusto);
    } catch (error) {
      const messageError = error.message;
      throw new Error(`Aconteceu algo inesperado : 😍 ${messageError}`);
    }
  }
}
module.exports = ServicosProjeto;
