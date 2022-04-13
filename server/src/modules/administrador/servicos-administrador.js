const Model = require('./model-registro');

class ServicosAdministrador {
  static async Criar(nome, setor, cargo, email, phone, role) {
    try {
      if (!role === 'ADMIN') {
        return new Error('usuario não tem permisão.');
      }
      if (role !== 'ADMIN' || role !== 'MODERADOR') {
        role = 'MODERADOR';
      }
      const Instace = await Model
        .Criar(nome, setor.toUpperCase(), cargo, email, phone, role);
      return Instace;
    } catch (error) {
      const messageError = error.message;
      throw new Error(`Aconteceu algo inesperado : 😍 ${messageError}`);
    }
  }

  static async Buscar(email) {
    try {
      const Instace = await Model.Buscar(email);
      return Instace;
    } catch (error) {
      const messageError = error.message;
      throw new Error(`Aconteceu algo inesperado : 😍 ${messageError}`);
    }
  }
}

module.exports = ServicosAdministrador;
