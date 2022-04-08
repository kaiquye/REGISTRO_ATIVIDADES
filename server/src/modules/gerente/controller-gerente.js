const Servicos = require('./servicos-gerente');

class Controller {
  static async Criar(req, res, next) {
    try {
      const {
        nome, setor, phone, matricula,
      } = req.body;
      await Servicos.Criar(nome, setor, phone, matricula);
      res.status(201).json({ message: 'Gerente cadastrado com sucesso.' });
    } catch (error) {
      next(error);
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = Controller;
