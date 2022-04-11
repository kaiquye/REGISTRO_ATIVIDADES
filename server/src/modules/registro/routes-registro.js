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
    this.App.get('/:Email/:Inicio/:Termino', Controller.Buscar);
    this.App.get('/', Controller.BuscarTodos);
    this.App.patch('/:Id', Controller.Atualizar);
    this.App.get('/registro/projeto', Controller.BuscarRegistroeProjetos);
  }
}
module.exports = new RouteRegistro().App;
