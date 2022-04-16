const Model = require('./model-gerente');

class Services {
  async Criar(nome, setor, phone, matricula) {
    try {
      const Instace = await Model.Criar(nome, setor, phone, matricula);
      return Instace;
    } catch (error) {
      const messageError = error.message;
      throw new Error(`Aconteceu algo inesperado : 😍 ${messageError}`);
    }
  }

  async Buscar(Id) {
    try {
      const Gerente = await Model.Buscar(Id);
      return Gerente;
    } catch (error) {
      const messageError = error.message;
      throw new Error(`Aconteceu algo inesperado : 😍 ${messageError}`);
    }
  }

  async BuscarTodos() {
    try {
      const Gerentes = await Model.BuscarTodos();
      return Gerentes;
    } catch (error) {
      const messageError = error.message;
      throw new Error(`Aconteceu algo inesperado : 😍 ${messageError}`);
    }
  }
}
module.exports = new Services();
