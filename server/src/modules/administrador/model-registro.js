const bycrpt = require('bcrypt');
const { ConnectionDatabase } = require('../../database/config');
const { Auth } = require('../../midldlewares/index');

class DatabaseModel {
  static async Criar(nome, setor, cargo, email, phone, role) {
    try {
      const Administrador = await ConnectionDatabase('administrador').select('id').where('email', email).first();
      if (Administrador) return new Error('Já exite um usuario cadastrado com esse e-mail');
      return await ConnectionDatabase('administrador').insert({
        nome, setor, cargo, email, phone, role,
      });
    } catch (error) {
      console.log(error);
      throw new Error(error.message);
    }
  }

  static async Buscar(email, password) {
    try {
      const Password = await ConnectionDatabase('administrador').select('password').where('email', email).first();
      if (!Password) return new Error('Não foi possivel encontrar usuario. Email invalido.');
      const Compare = await bycrpt.compare(password, Password.password);
      if (Compare) return Auth.GerarToken(email, process.env.administrador);
      return false;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async LoginPorEmail(email) {
    try {
      const role = await ConnectionDatabase('administrador').select('role').where('email', email).first();
      if (!role) return new Error('Não foi possivel encontrar usuario. Email invalido.');
      return role;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async BuscarTodos() {
    try {
      return await ConnectionDatabase('administrador').select('*');
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
module.exports = DatabaseModel;
