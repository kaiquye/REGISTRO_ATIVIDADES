const { Router } = require('express');
const Controller = require('./controller-ccusto');
const { Auth } = require('../../midldlewares/index');

class RouteCentrodeCusto {
  App;

  constructor() {
    this.App = Router();
    this.middleware();
    this.RoutesProtegidas();
  }

  middleware() {
    this.App.use(Auth.ValidadeADadmin);
  }

  RoutesProtegidas() {
    this.App.get('/', Controller.BuscarTodos);
    this.App.post('/', Controller.Criar);
    this.App.get('/:Id', Controller.Buscar);
    this.App.get('/centrodecusto/projeto/:Id', Controller.BuscarCentroDeCustoEProjetos);
  }
}
module.exports = new RouteCentrodeCusto().App;
