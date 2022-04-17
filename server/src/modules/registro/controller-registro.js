const Service = require('./servicos-registro');
const ValidarCampos = require('../../utils/ValidarBody');
class RegistroController {
  async Criar(req, res) {
    try {
      console.log(req.body);
      const {
        assunto, funcionario, projeto, inicio, termino, email, emailToken,
      } = req.body;
      const CheckRes = ValidarCampos.ValidarRequest([assunto, projeto, termino, emailToken]);
      if (CheckRes instanceof Error) return res.status(400).json({ message: CheckRes.message });
      const Instace = await Service
        .Criar(assunto, funcionario, emailToken, projeto, inicio || new Date(), termino);
      if (Instace instanceof Error) return res.status(400).json({ message: Instace.message });
      return res.status(201).json({ message: ' Registro criado com sucesso !' });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async Buscar(req, res) {
    try {
      const { Email, Inicio } = req.params;
      const { Registros, DiasNaoTrabalhados } = await Service.Buscar(Inicio, Email);
      if (Registros) return res.status(200).json({ data: Registros, DiasNaoTrabalhados });
      return res.status(200).json({ message: 'registro não existe !' });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async BuscarTodos(req, res) {
    try {
      const Registro = await Service.BuscarTodos();
      if (Registro) return res.status(200).json({ data: Registro });
      return res.status(200).json({ message: 'Não existe registros' });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async Atualizar(req, res) {
    try {
      const { Id } = req.params;
      const {
        assunto, funcionario, email, projeto, inicio, termino,
      } = req.body;
      ValidarCampos.ValidarRequest([assunto, funcionario, email, projeto, inicio, termino]);
      await Service.Atualizar(Id, assunto, funcionario, email, projeto, inicio, termino);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async Filtrar(req, res) {
    try {
      const {
        Data, Setor, Ccusto, email,
      } = req.body;
      ValidarCampos.ValidarRequest([Data, Setor, Ccusto, email]);
      const Instace = await Service.Filtrar(Data, Setor, Ccusto, email);
      if (Instace instanceof Error) return res.status(400).json({ message: Instace.message });
      if (Instace) return res.status(200).json({ data: Instace });
      return res.status(200).json({ message: 'Não existe registros' });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async BuscarRegistroeProjetos(req, res) {
    try {
      const ResgistroseProjetos = await Service.BuscarRegistroeProjetos();
      if (ResgistroseProjetos) return res.status(200).json({ data: ResgistroseProjetos });
      return res.status(200).json({ message: 'registro não existe !' });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async BuscarPorEmail(req, res) {
    try {
      const { emailToken } = req.body;
      const Registro = await Service.BuscarPorEmail(emailToken);
      if (Registro) return res.status(200).json({ data: Registro });
      return res.status(200).json({ message: 'Não existe registros' });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async BuscarQtsPorMes(req, res) {
    try {
      const Registro = await Service.BuscarQtsPorMes(req.body.emailToken);
      if (Registro) return res.status(200).json({ data: Registro });
      return res.status(200).json({ message: 'Não existe registros' });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new RegistroController();
