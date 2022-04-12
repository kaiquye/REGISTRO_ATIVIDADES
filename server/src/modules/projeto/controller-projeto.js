const Servicos = require('./servicos-projeto');

class ControllerProjeto {
  static async Criar(req, res) {
    try {
      const {
        setor, descricao, inicio, gerente, centrodecusto, decorrido,
      } = req.body;
      const Instace = await Servicos
        .Criar(setor, descricao, inicio || new Date(), gerente, centrodecusto, decorrido);
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
      if (!Instace) return res.status(200).json({ data: 'no data.' });
      return res.status(200).json({ data: Instace });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async BuscarTodos(req, res) {
    try {
      const Instace = await Servicos.BuscarTodos();
      if (!Instace) return res.status(200).json({ data: 'no data.' });
      return res.status(200).json({ data: Instace });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async BuscarProjetoseGerenteseCcusto(req, res) {
    try {
      const Instace = await Servicos.BuscarProjetoseGerenteseCcusto();
      if (!Instace) return res.status(200).json({ data: 'no data.' });
      return res.status(200).json({ data: Instace });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async Teste(req, res) {
    try {
     await Servicos.Teste();
    } catch (error) {
    }
  }
}

module.exports = ControllerProjeto;
