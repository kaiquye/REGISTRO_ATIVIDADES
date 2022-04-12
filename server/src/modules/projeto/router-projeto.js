const { Router } = require('express');
const Controller = require('./controller-projeto');

class RouteRegistro {
  App;

  constructor() {
    this.App = Router();
    this.RoutesProtegidas();
  }

  RoutesProtegidas() {
    this.App.post('/', Controller.Criar);
    this.App.get('/:Id', Controller.Buscar);
    this.App.get('/', Controller.BuscarTodos);
    this.App.get('/gerente/projeto/ccusto', Controller.BuscarProjetoseGerenteseCcusto);
    this.App.post('/filtrar/projetos', Controller.Filtrar);
  }
}
module.exports = new RouteRegistro().App;
