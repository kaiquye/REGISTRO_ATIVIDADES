const Model = require('./model-registro');

class ServicosAdministrador {
  static async Criar(nome, setor, cargo, email, phone, password) {
    try {
      const Instace = await Model.Criar(nome, setor.toUpperCase(), cargo, email, phone, password);
      return Instace;
    } catch (error) {
      const messageError = error.message;
      throw new Error(`Aconteceu algo inesperado : 😍 ${messageError}`);
    }
  }

  static async Buscar(email, password) {
    try {
      const Instace = await Model.Buscar(email, password);
      return Instace;
    } catch (error) {
      const messageError = error.message;
      throw new Error(`Aconteceu algo inesperado : 😍 ${messageError}`);
    }
  }
}

module.exports = ServicosAdministrador;
