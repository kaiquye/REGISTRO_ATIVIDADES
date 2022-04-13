const Servicos = require('./servicos-projeto');

class ControllerProjeto {
  static async Criar(req, res) {
    try {
      const {
        setor, descricao, inicio, gerente, ccusto, decorrido,
      } = req.body;
      console.log('tedted', req.body);
      const Instace = await Servicos
        .Criar(setor, descricao, inicio || new Date(), gerente, ccusto, decorrido);
      if (Instace instanceof Error) return res.status(400).json({ message: Instace.message });
      return res.status(201).json({ message: 'Projeto alocado com sucesso.' });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async Buscar(req, res) {
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

  static async BuscarTodos(req, res) {
    try {
      const Instace = await Servicos.BuscarTodos();
      if (Instace instanceof Error) return res.status(400).json({ message: Instace.message });
      if (!Instace) return res.status(200).json({ data: 'no data.' });
      return res.status(200).json({ data: Instace });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async BuscarProjetoseGerenteseCcusto(req, res) {
    try {
      const Instace = await Servicos.BuscarProjetoseGerenteseCcusto();
      if (Instace instanceof Error) return res.status(400).json({ message: Instace.message });
      if (!Instace) return res.status(200).json({ data: 'no data.' });
      return res.status(200).json({ data: Instace });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async Filtrar(req, res) {
    try {
      const { gerente, setor, ccusto } = req.body;
      console.log(gerente, setor, ccusto)
      const Instace = await Servicos.Filtrar(gerente, setor, ccusto);
      if (Instace instanceof Error) return res.status(400).json({ message: Instace.message });
      if (!Instace) return res.status(200).json({ data: 'no data.' });
      return res.status(200).json({ data: Instace });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async Apagar(req, res) {
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

module.exports = ControllerProjeto;
