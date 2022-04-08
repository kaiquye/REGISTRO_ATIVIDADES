const Service = require('./servicos-registro');

class RegistroController {
  static async Criar(req, res, next) {
    try {
      const {
        assunto, funcionario, email, projeto, inicio, termino,
      } = req.body;
      await Service.Criar(assunto, funcionario, email, projeto, inicio || new Date(), termino);
      return res.status(201).json({ message: ' Registro criado com sucesso !' });
    } catch (error) {
      next(error);
      return res.status(500).json({ message: error.message });
    }
  }

  static async Buscar(req, res, next) {
    try {
      const { Id } = req.params;
      const Registro = await Service.Buscar(Id);
      if (Registro) return res.status(200).json({ data: Registro });
      return res.status(400).json({ message: 'registro não existe !' });
    } catch (error) {
      next(error);
      return res.status(500).json({ message: error.message });
    }
  }

  static async BuscarTodos(req, res, next) {
    try {
      const Registro = await Service.BuscarTodos();
      if (Registro) return res.status(200).json({ data: Registro });
      return res.status(400).json({ message: 'Não existe registros' });
    } catch (error) {
      next(error);
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
      next(error);
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = RegistroController;
