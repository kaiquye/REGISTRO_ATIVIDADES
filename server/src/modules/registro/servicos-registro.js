const Model = require('./model-registro');
const Util = require('../../utils/Date');
const Dias = require('../../utils/CalcularDiasNãoTrabalhados');
const CalcularHorasTrabalhadas = require('../../utils/CalcularHorasTrabalhadas');

class ServicosRegistro {
  async Criar(assunto, funcionario, email, projeto, inicio, termino) {
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

  async Buscar(Inicio, email) {
    try {
      const Registros = await Model.Buscar(Inicio, email);
      const Mes = Dias.CalcularDiasDoMes(Inicio);
      const DiasNaoTrabalhados = Dias.Calcular(Registros, Mes);
      return {
        Registros,
        DiasNaoTrabalhados,
      };
    } catch (error) {
      const messageError = error.message;
      throw new Error(`Aconteceu algo inesperado : 😍 ${messageError}`);
    }
  }

  async BuscarTodos() {
    try {
      const Registros = await Model.BuscarTodos();
      return Registros;
    } catch (error) {
      const messageError = error.message;
      throw new Error(`Aconteceu algo inesperado : 😍 ${messageError}`);
    }
  }

  async Atualizar(TokenRegistro, assunto, funcionario, email, projeto, inicio, termino) {
    try {
      await Model.Atualizar(TokenRegistro, assunto, funcionario, email, projeto, inicio, termino);
    } catch (error) {
      const messageError = error.message;
      throw new Error(`Aconteceu algo inesperado : 😍 ${messageError}`);
    }
  }

  async BuscarRegistroeProjetos() {
    try {
      return await Model.BuscarRegistroeProjetos();
    } catch (error) {
      const messageError = error.message;
      throw new Error(`Aconteceu algo inesperado : 😍 ${messageError}`);
    }
  }

  async Filtrar(Data, Setor, Ccusto, email) {
    try {
      return await Model.Filtrar(Data, Setor, Ccusto, email);
    } catch (error) {
      const messageError = error.message;
      throw new Error(`Aconteceu algo inesperado : 😍 ${messageError}`);
    }
  }

  async Filtrar(email) {
    try {
      return await Model.BuscarPorEmail(email);
    } catch (error) {
      const messageError = error.message;
      throw new Error(`Aconteceu algo inesperado : 😍 ${messageError}`);
    }
  }
  async BuscarQtsPorMes(email) {
    try {
      return await Model.BuscarQtsPorMes(email);
    } catch (error) {
      const messageError = error.message;
      throw new Error(`Aconteceu algo inesperado : 😍 ${messageError}`);
    }
  }

}

module.exports = new ServicosRegistro();
