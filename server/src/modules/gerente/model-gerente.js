const { ConnectionDatabase } = require('../../database/config');

class ModelGerente {
  static async Criar(nome, setor, phone, matricula) {
    try {
      const Gerente = await ConnectionDatabase('gerente').select('matricula').where('matricula', matricula).first();
      const Phone = await ConnectionDatabase('gerente').select('phone').where('phone', phone).first();
      if (Gerente !== undefined) return new Error('Gerente ja cadastrado. 🏌️‍♀️');
      if (Phone !== undefined) return new Error('Telefone ja cadastrado.');
      return await ConnectionDatabase('gerente').insert({
        nome, setor, phone, matricula,
      });
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async Buscar(Id) {
    try {
      const Gerente = await ConnectionDatabase('gerente').select('*').where('id', Id);
      return Gerente[0];
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async BuscarTodos() {
    const SQL = 'select * from gerente GROUP BY nome';
    try {
      const Gerentes = await ConnectionDatabase.raw(SQL);
      return Gerentes[0];
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = ModelGerente;
