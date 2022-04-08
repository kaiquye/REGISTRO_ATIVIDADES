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
  }
}
module.exports = new RouteRegistro().App;
