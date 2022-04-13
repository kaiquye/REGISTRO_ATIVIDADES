const { Router } = require('express');
const Controller = require('./controller-administrador');
const { Auth } = require('../../midldlewares/index');

class RoutesAdministrador {
  App;

  constructor() {
    this.App = Router();
    this.RoutesPublicas();
    this.Autorizacao();
    this.RoutesProtegidas();
  }

  Autorizacao() {
    this.App.use(Auth.ValidadeAD);
  }

  RoutesProtegidas() {
    this.App.post('/', Controller.Criar);
  }

  RoutesPublicas() {
    this.App.get('/login', Controller.Buscar);
  }
}
module.exports = new RoutesAdministrador().App;
