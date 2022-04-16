const Model = require('./model-projeto');
const Utils = require('../../utils/Date');

class ServicosProjeto {
  async Criar(setor, descricao, inicio, gerente, centrodecusto, decorrido) {
    try {
      // Centro de custo : CALCULAR A DATA TRABALHADA  -  GERAR UM VALOR PARA O CENTRO DE CUSTO.
      const DateFormt = Utils.DataNovoRegistro(inicio);
      const Instace = await
        Model.Criar(setor, descricao, DateFormt, gerente, centrodecusto, decorrido);
      return Instace;
    } catch (error) {
      const messageError = error.message;
      throw new Error(`Aconteceu algo inesperado : 😍 ${messageError}`);
    }
  }

  async Buscar(Id) {
    try {
      const Instace = await Model.Buscar(Id);
      return Instace;
    } catch (error) {
      const messageError = error.message;
      throw new Error(`Aconteceu algo inesperado : 😍 ${messageError}`);
    }
  }

  async BuscarTodos() {
    try {
      const Instace = await Model.BuscarTodos();
      return Instace;
    } catch (error) {
      const messageError = error.message;
      throw new Error(`Aconteceu algo inesperado : 😍 ${messageError}`);
    }
  }

  async BuscarProjetoseGerenteseCcusto() {
    try {
      const Instace = await Model.BuscarProjetoseGerenteseCcusto();
      console.log(Instace);
      return Instace;
    } catch (error) {
      const messageError = error.message;
      throw new Error(`Aconteceu algo inesperado : 😍 ${messageError}`);
    }
  }

  async Filtrar(Gerente, Setor, Ccusto) {
    try {
      const Projetos = await Model.FIltrar(Gerente, Setor, Ccusto);
      return Projetos;
    } catch (error) {
      const messageError = error.message;
      throw new Error(`Aconteceu algo inesperado : 😍 ${messageError}`);
    }
  }

  async Apagar(Id) {
    try {
      const Instace = await Model.Apagar(Id);
      return Instace;
    } catch (error) {
      const messageError = error.message;
      throw new Error(`Aconteceu algo inesperado : 😍 ${messageError}`);
    }
  }
}
module.exports = new ServicosProjeto();
