const Model = require('./models-ccusto');

class ServicosCcusto {
  async Criar(setor, gastos, livres, empresa) {
    try {
      const Instace = await Model.Criar(setor.toUpperCase(), gastos, livres, empresa);
      return Instace;
    } catch (error) {
      console.log(error);
      const messageError = error.message;
      throw new Error(`Aconteceu algo inesperado : 😍 ${messageError}`);
    }
  }

  async Buscar(Id) {
    try {
      return await Model.Buscar(Id);
    } catch (error) {
      const messageError = error.message;
      throw new Error(`Aconteceu algo inesperado : 😍 ${messageError}`);
    }
  }

  async BuscarTodos(condicao) {
    try {
      const Ccustos = await Model.BuscarTodos(condicao);
      return Ccustos;
    } catch (error) {
      const messageError = error.message;
      throw new Error(`Aconteceu algo inesperado : 😍 ${messageError}`);
    }
  }

  async Atualizar(setor, gastos, livres, empresa) {
    try {
      const Instace = await Model.Atualizar(setor, gastos, livres, empresa);
      return Instace;
    } catch (error) {
      const messageError = error.message;
      throw new Error(`Aconteceu algo inesperado : 😍 ${messageError}`);
    }
  }

  async BuscarCentroDeCustoEProjetos(Id) {
    try {
      return await Model.BuscarCentroDeCustoEProjetos(Id);
    } catch (error) {
      const messageError = error.message;
      throw new Error(`Aconteceu algo inesperado : 😍 ${messageError}`);
    }
  }
}

module.exports = new ServicosCcusto();
