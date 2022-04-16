const Servicos = require('./servicos-ccusto');
const ValidarCampos = require('../../utils/ValidarBody');
class ControllerCentroDeCusto {
  async Criar(req, res) {
    try {
      const {
        setor, gastos, livres, empresa,
      } = req.body;
      ValidarCampos.ValidarRequest([setor, gastos, livres, empresa]);
      const Instace = await Servicos.Criar(setor, gastos, livres, empresa);
      if (Instace instanceof Error) return res.status(400).json({ message: Instace.message });
      return res.status(201).json({ message: ' Registro criado com sucesso !' });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async Buscar(req, res) {
    try {
      const { Id } = req.params;
      const Ccusto = await Servicos.Buscar(Id);
      if (Ccusto) return res.status(200).json({ data: Ccusto });
      return res.status(400).json({ message: 'no data' });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async BuscarTodos(req, res) {
    try {
      const Ccusto = await Servicos.BuscarTodos();
      if (Ccusto) return res.status(200).json({ data: Ccusto });
      return res.status(400).json({ message: 'Não existe Ccusto' });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async BuscarCentroDeCustoEProjetos(req, res) {
    try {
      const { Id } = req.params;
      const CcustoEprojeto = await Servicos.BuscarCentroDeCustoEProjetos(Id);
      res.status(200).json({ data: CcustoEprojeto });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async Update(req, res) {
    try {
      const { Id } = req.params;
      const {
        setor, gastos, livres, empresa,
      } = req.body;
      ValidarCampos.ValidarRequest([setor, gastos, livres, empresa]);
      const Instace = await Servicos.Atualizar(Id, setor, gastos, livres, empresa);
      if (Instace instanceof Error) return res.status(400).json({ message: Instace.message });
      return res.status(200).json({ message: 'Centro de custo atualizado' });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}
module.exports = new ControllerCentroDeCusto();
