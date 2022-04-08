const Model = require('./models-ccusto');

class ServicosCcusto {
  static async Criar(setor, gastos, livres, empresa) {
    try {
      await Model.Criar(setor.toUpperCase(), gastos, livres, empresa);
    } catch (error) {
      console.log(error);
      const messageError = error.message;
      throw new Error(`Aconteceu algo inesperado : 😍 ${messageError}`);
    }
  }

  static async Buscar(Id) {
    try {
      return await Model.Buscar(Id);
    } catch (error) {
      const messageError = error.message;
      throw new Error(`Aconteceu algo inesperado : 😍 ${messageError}`);
    }
  }

  static async BuscarTodos(condicao) {
    try {
      const Ccustos = await Model.BuscarTodos(condicao);
      return Ccustos;
    } catch (error) {
      const messageError = error.message;
      throw new Error(`Aconteceu algo inesperado : 😍 ${messageError}`);
    }
  }

  static async Atualizar(setor, gastos, livres, empresa) {
    try {
      await Model.Atualizar(setor, gastos, livres, empresa);
    } catch (error) {
      const messageError = error.message;
      throw new Error(`Aconteceu algo inesperado : 😍 ${messageError}`);
    }
  }

  static async BuscarCentroDeCustoEProjetos(Id) {
    try {
      return await Model.BuscarCentroDeCustoEProjetos(Id);
    } catch (error) {
      const messageError = error.message;
      throw new Error(`Aconteceu algo inesperado : 😍 ${messageError}`);
    }
  }
}

module.exports = ServicosCcusto;
