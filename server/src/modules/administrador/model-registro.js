const bycrpt = require('bcrypt');
const { ConnectionDatabase } = require('../../database/config');
const { Auth } = require('../../midldlewares/index')

class DatabaseModel {
  static async Criar(nome, setor, cargo, email, phone, password) {
    try {
      const Administrador = await ConnectionDatabase('administrador').select('id').where('email', email).first();
      if (Administrador) return new Error('Já exite um usuario cadastrado com esse e-mail');
      const hashed = await bycrpt.hash(password, 10);
      return await ConnectionDatabase('administrador').insert({
        nome, setor, cargo, email, phone, password: hashed,
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
      const Compare = await bycrpt.compare(password, Password['password']);
      console.log(Auth.GerarToken(email))
      if (Compare) return Auth.GerarToken(email);
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
