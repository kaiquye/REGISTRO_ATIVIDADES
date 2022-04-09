const Servicos = require('./model-registro');

class AdministradorController {
  static async Criar(req, res) {
    try {
      const {
        nome, setor, cargo, email, phone, password,
      } = req.body;
      const Instace = await Servicos.Criar(nome, setor, cargo, email, phone, password);
      if (Instace instanceof Error) return res.status(400).json({ message: Instace.message });
      return res.status(201).json({ message: 'Administrador criado com sucesso !' });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async Buscar(req, res) {
    try {
      const { email, password } = req.body;
      const Instace = await Servicos.Buscar(email, password);
      if (Instace instanceof Error) return res.status(201).json({ message: Instace.message });
      return res.status(201).json({ message: Instace });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

module.exports = AdministradorController;
