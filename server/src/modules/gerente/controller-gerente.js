const Servicos = require('./servicos-gerente');

class Controller {
  static async Criar(req, res, next) {
    try {
      const {
        setor, descricao, inicio, gerente, centrodecusto,
      } = req.body;
      await Servicos.Criar(setor, descricao, inicio, gerente, centrodecusto);
    } catch (error) {
      next(error);
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = Controller;
