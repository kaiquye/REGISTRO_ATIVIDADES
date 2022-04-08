const { ConnectionDatabase } = require('../../database/config');

class ModelGerente {
  static async Criar(nome, setor, phone, matricula) {
    try {
      const Gerente = await ConnectionDatabase('gerente').select('matricula').where('matricula', matricula).first();
      const Phone = await ConnectionDatabase('gerente').select('phone').where('phone', phone).first();
      if (Gerente !== undefined) throw new Error('Gerente ja cadastrado. 🏌️‍♀️');
      if (Phone !== undefined) throw new Error('Telefone ja cadastrado.');
      return await ConnectionDatabase('gerente').insert({
        nome, setor, phone, matricula,
      });
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = ModelGerente;
