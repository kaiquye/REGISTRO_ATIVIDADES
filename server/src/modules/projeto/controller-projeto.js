const Servicos = require('./servicos-projeto');
const ValidarCampos = require('../../utils/ValidarBody');
class ControllerProjeto {
  async Criar(req, res) {
    try {
      const {
        setor, descricao, inicio, gerente, ccusto, decorrido,
      } = req.body;
      ValidarCampos.ValidarRequest([setor, descricao, gerente, ccusto]);
      console.log('tedted', req.body);
      const Instace = await Servicos
        .Criar(setor, descricao, inicio || new Date(), gerente, ccusto, decorrido);
      if (Instace instanceof Error) return res.status(400).json({ message: Instace.message });
      return res.status(201).json({ message: 'Projeto alocado com sucesso.' });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async Buscar(req, res) {
    try {
      const { Id } = req.params;
      const Instace = await Servicos.Buscar(Id);
      if (Instace instanceof Error) return res.status(400).json({ message: Instace.message });
      if (!Instace) return res.status(200).json({ data: 'no data.' });
      return res.status(200).json({ data: Instace });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async BuscarTodos(req, res) {
    try {
      const Instace = await Servicos.BuscarTodos();
      if (Instace instanceof Error) return res.status(400).json({ message: Instace.message });
      if (!Instace) return res.status(200).json({ data: 'no data.' });
      return res.status(200).json({ data: Instace });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async BuscarProjetoseGerenteseCcusto(req, res) {
    try {
      const Instace = await Servicos.BuscarProjetoseGerenteseCcusto();
      if (Instace instanceof Error) return res.status(400).json({ message: Instace.message });
      if (!Instace) return res.status(200).json({ data: 'no data.' });
      return res.status(200).json({ data: Instace });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async Filtrar(req, res) {
    try {
      const { gerente, setor, ccusto } = req.body;
      ValidarCampos.ValidarRequest([gerente, setor, ccusto]);
      const Instace = await Servicos.Filtrar(gerente, setor, ccusto);
      if (Instace instanceof Error) return res.status(400).json({ message: Instace.message });
      if (!Instace) return res.status(200).json({ data: 'no data.' });
      return res.status(200).json({ data: Instace });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async Apagar(req, res) {
    try {
      const { Id } = req.params;
      const Instace = await Servicos.Apagar(Id);
      if (Instace instanceof Error) return res.status(400).json({ message: Instace.message });
      return res.status(200);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new ControllerProjeto();
