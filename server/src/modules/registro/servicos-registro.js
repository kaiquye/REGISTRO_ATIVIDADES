const Model = require('./model-registro');
const Util = require('../../utils/Date');
const CalcularHorasTrabalhadas = require('../../utils/CalcularHorasTrabalhadas');

class ServicosRegistro {
  static async Criar(assunto, funcionario, email, projeto, inicio, termino) {
    try {
      const DateStart = Util.DataNovoRegistro(inicio);
      const DateEnd = Util.DataNovoRegistro(termino);
      const Decorrido = CalcularHorasTrabalhadas.CalcularHoras(DateStart, DateEnd);
      return await Model.Criar(assunto, funcionario, email, projeto, DateStart, DateEnd, Decorrido);
    } catch (error) {
      const messageError = error.message;
      throw new Error(`Aconteceu algo inesperado : 😍 ${messageError}`);
    }
  }

  static async Buscar(TokenRegistro) {
    try {
      return await Model.Buscar(TokenRegistro);
    } catch (error) {
      const messageError = error.message;
      throw new Error(`Aconteceu algo inesperado : 😍 ${messageError}`);
    }
  }

  static async BuscarTodos() {
    try {
      const Registros = await Model.BuscarTodos();
      return Registros;
    } catch (error) {
      const messageError = error.message;
      throw new Error(`Aconteceu algo inesperado : 😍 ${messageError}`);
    }
  }

  static async Atualizar(TokenRegistro, assunto, funcionario, email, projeto, inicio, termino) {
    try {
      await Model.Atualizar(TokenRegistro, assunto, funcionario, email, projeto, inicio, termino);
    } catch (error) {
      const messageError = error.message;
      throw new Error(`Aconteceu algo inesperado : 😍 ${messageError}`);
    }
  }
}

module.exports = ServicosRegistro;
