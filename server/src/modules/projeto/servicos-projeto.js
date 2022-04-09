const Model = require('./model-projeto');
const Utils = require('../../utils/Date');

class ServicosProjeto {
  static async Criar(setor, descricao, inicio, gerente, centrodecusto) {
    try {
      // Centro de custo : CALCULAR A DATA TRABALHADA  -  GERAR UM VALOR PARA O CENTRO DE CUSTO.
      const DateFormt = Utils.DataNovoRegistro(inicio);
      const Instace = await Model.Criar(setor, descricao, DateFormt, gerente, centrodecusto);
      return Instace;
    } catch (error) {
      const messageError = error.message;
      throw new Error(`Aconteceu algo inesperado : 😍 ${messageError}`);
    }
  }

  static async Buscar(Id) {
    try {
      const Instace = await Model.Buscar(Id);
      return Instace;
    } catch (error) {
      const messageError = error.message;
      throw new Error(`Aconteceu algo inesperado : 😍 ${messageError}`);
    }
  }

  static async BuscarTodos() {
    try {
      const Instace = await Model.BuscarTodos();
      return Instace;
    } catch (error) {
      const messageError = error.message;
      throw new Error(`Aconteceu algo inesperado : 😍 ${messageError}`);
    }
  }
}
module.exports = ServicosProjeto;
