const { Router } = require('express');
const Controller = require('./controller-registro');

class RouteRegistro {
  App;

  constructor() {
    this.App = Router();
    this.RoutesProtegidas();
  }

  RoutesProtegidas() {
    this.App.post('/', Controller.Criar);
    this.App.get('/:token_registro', Controller.Buscar);
    this.App.get('/', Controller.BuscarTodos);
    this.App.patch('/:token_registro', Controller.Atualizar);
  }
}
module.exports = new RouteRegistro().App;