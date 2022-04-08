const { Router } = require('express');
const Controller = require('./controller-ccusto');

class RouteCentrodeCusto {
  App;

  constructor() {
    this.App = Router();
    this.RoutesProtegidas();
  }

  RoutesProtegidas() {
    this.App.get('/', Controller.BuscarTodos);
    this.App.post('/', Controller.Criar);
    this.App.get('/:Id', Controller.Buscar);
    this.App.get('/centrodecusto/projeto/:Id', Controller.BuscarCentroDeCustoEProjetos);
  }
}
module.exports = new RouteCentrodeCusto().App;
