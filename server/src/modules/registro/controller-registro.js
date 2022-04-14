const Service = require('./servicos-registro');

class RegistroController {
  static async Criar(req, res, next) {
    try {
      const {
        assunto, funcionario, projeto, inicio, termino, email,
      } = req.body;
      console.log('tedted', req.body);
      const Instace = await Service
        .Criar(assunto, funcionario, email, projeto, inicio || new Date(), termino);
      if (Instace instanceof Error) return res.status(400).json({ message: Instace.message });
      return res.status(201).json({ message: ' Registro criado com sucesso !' });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async Buscar(req, res, next) {
    try {
      const { Email, Inicio } = req.params;
      const { Registros, DiasNaoTrabalhados } = await Service.Buscar(Inicio, Email);
      if (Registros) return res.status(200).json({ data: Registros, DiasNaoTrabalhados });
      return res.status(400).json({ message: 'registro não existe !' });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async BuscarTodos(req, res, next) {
    try {
      const Registro = await Service.BuscarTodos();
      if (Registro) return res.status(200).json({ data: Registro });
      return res.status(400).json({ message: 'Não existe registros' });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async Atualizar(req, res, next) {
    try {
      const { Id } = req.params;
      const {
        assunto, funcionario, email, projeto, inicio, termino,
      } = req.body;
      await Service.Atualizar(Id, assunto, funcionario, email, projeto, inicio, termino);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async Filtrar(req, res, next) {
    try {
      const {
        Data, Setor, Ccusto, email,
      } = req.body;
      const Instace = await Service.Filtrar(Data, Setor, Ccusto, email);
      if (Instace instanceof Error) return res.status(400).json({ message: Instace.message });
      if (Instace) return res.status(200).json({ data: Instace });
      return res.status(400).json({ message: 'Não existe registros' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async BuscarRegistroeProjetos(req, res) {
    try {
      const ResgistroseProjetos = await Service.BuscarRegistroeProjetos();
      if (ResgistroseProjetos) return res.status(200).json({ data: ResgistroseProjetos });
      return res.status(400).json({ message: 'registro não existe !' });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

module.exports = RegistroController;
