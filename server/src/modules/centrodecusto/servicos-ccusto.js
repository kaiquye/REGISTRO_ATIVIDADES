const Model = require('./models-ccusto');

class ServicosCcusto {
  static async Criar(setor, gastos, livres, empresa) {
    try {
      await Model.Criar(setor, gastos, livres, empresa);
    } catch (error) {
      console.log('______', error);
      throw new Error('Aconteceu algo inesperado.');
    }
  }

  static async Buscar(Id) {
    try {
      return await Model.Buscar(Id);
    } catch (error) {
      throw new Error('Aconteceu algo inesperado.');
    }
  }

  static async BuscarTodos() {
    try {
      const Ccusto = await Model.BuscarTodos();
      return Ccusto;
    } catch (error) {
      throw new Error('Aconteceu algo inesperado.');
    }
  }

  static async Atualizar(setor, gastos, livres, empresa) {
    try {
      await Model.Atualizar(setor, gastos, livres, empresa);
    } catch (error) {
      throw new Error('Aconteceu algo inesperado.');
    }
  }
}

module.exports = ServicosCcusto;
