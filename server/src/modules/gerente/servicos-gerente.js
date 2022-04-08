const Model = require('./model-gerente');

class Services {
  static async Criar(nome, setor, phone, matricula) {
    try {
      await Model.Criar(nome, setor, phone, matricula);
    } catch (error) {
      const messageError = error.message;
      throw new Error(`Aconteceu algo inesperado : 😍 ${messageError}`);
    }
  }
}
module.exports = Services;
