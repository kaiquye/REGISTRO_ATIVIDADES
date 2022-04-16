const Servicos = require('./servicos-gerente');
const ValidarCampos = require('../../utils/ValidarBody');
class Controller {
  async Criar(req, res, next) {
    try {
      const {
        nome, setor, phone, matricula,
      } = req.body;
      ValidarCampos.ValidarRequest([nome, setor, phone]);
      const Instace = await Servicos.Criar(nome, setor, phone, matricula);
      if (Instace instanceof Error) return res.status(400).json({ message: Instace.message });
      res.status(201).json({ message: 'Gerente cadastrado com sucesso.' });
    } catch (error) {
      next(error);
      res.status(500).json({ message: error.message });
    }
  }

  async Buscar(req, res, next) {
    try {
      const { Id } = req.params;
      const Gerente = await Servicos.Buscar(Id);
      if (Gerente) return res.status(201).json({ data: Gerente });
      return res.status(400).json({ message: 'Não foi possivel achar gerente.' });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async BuscarTodos(req, res, next) {
    try {
      const Gerentes = await Servicos.BuscarTodos();
      if (Gerentes) return res.status(201).json({ data: Gerentes });
      return res.status(400).json({ message: 'Não foi possivel achar gerente.' });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new Controller();
