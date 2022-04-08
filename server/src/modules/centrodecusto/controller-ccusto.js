const Servicos = require('./servicos-ccusto');

class ControllerCentroDeCusto {
  static async Criar(req, res, next) {
    try {
      const {
        setor, gastos, livres, empresa,
      } = req.body;
      await Servicos.Criar(setor, gastos, livres, empresa);
      res.status(201).json({ message: ' Registro criado com sucesso !' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async Buscar(req, res, next) {
    try {
      const { Id } = req.params;
      const Ccusto = await Servicos.Buscar(Id);
      if (Ccusto) return res.status(200).json({ data: Ccusto });
      return res.status(400).json({ message: 'no data' });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async BuscarTodos(req, res, next) {
    try {
      const Ccusto = await Servicos.BuscarTodos();
      if (Ccusto) return res.status(200).json({ data: Ccusto });
      return res.status(400).json({ message: 'Não existe Ccusto' });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async BuscarCentroDeCustoEProjetos(req, res, next) {
    try {
      const { Id } = req.params;
      const CcustoEprojeto = await Servicos.BuscarCentroDeCustoEProjetos(Id);
      res.status(200).json({ data: CcustoEprojeto });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async Update(req, res, next) {
    try {
      const { Id } = req.params;
      const {
        setor, gastos, livres, empresa,
      } = req.body;
      await Servicos.Atualizar(Id, setor, gastos, livres, empresa);
      res.status(200).json({ message: 'Centro de custo atualizado' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}
module.exports = ControllerCentroDeCusto;