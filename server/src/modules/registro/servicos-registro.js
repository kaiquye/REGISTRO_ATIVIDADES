const Model = require('./model-registro');
const Util = require('../../utils/Date');
const Dias = require('../../utils/CalcularDiasNãoTrabalhados');
const CalcularHorasTrabalhadas = require('../../utils/CalcularHorasTrabalhadas');

class ServicosRegistro {
  static async Criar(assunto, funcionario, email, projeto, inicio, termino) {
    try {
      Util.VerificarMes(inicio, termino);
      const DateStart = Util.DataNovoRegistro(inicio);
      const DateEnd = Util.DataNovoRegistro(termino);
      const Decorrido = CalcularHorasTrabalhadas.CalcularHoras(DateStart, DateEnd);
      return await Model.Criar(assunto, funcionario, email, projeto, DateStart, DateEnd, Decorrido);
    } catch (error) {
      const messageError = error.message;
      throw new Error(`Aconteceu algo inesperado : 😍 ${messageError}`);
    }
  }

  static async Buscar(Inicio, Termino, email) {
    try {
      const Registros = await Model.Buscar(Inicio, Termino, email);
      const DiasNaoTrabalhados = Dias.Calcular(Registros);
      return {
        Registros,
        DiasNaoTrabalhados,
      };
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

  static async BuscarRegistroeProjetos() {
    try {
      return await Model.BuscarRegistroeProjetos();
    } catch (error) {
      const messageError = error.message;
      throw new Error(`Aconteceu algo inesperado : 😍 ${messageError}`);
    }
  }
}

module.exports = ServicosRegistro;
