const { Router } = require('express');
const Controller = require('./controller-gerente');

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
  }
}
module.exports = new RouteRegistro().App;
