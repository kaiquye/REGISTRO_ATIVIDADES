const { Router } = require('express');
const Controller = require('./controller-administrador');

class RoutesAdministrador {
  App;

  constructor() {
    this.App = Router();
    this.RoutesProtegidas();
  }

  RoutesProtegidas() {
    this.App.post('/', Controller.Criar);
    this.App.get('/login', Controller.Buscar);
  }
}
module.exports = new RoutesAdministrador().App;
