const { Router } = require('express');
const Controller = require('./controller-projeto');
const { Auth } = require('../../midldlewares/index')

class RouteRegistro {
  App;

  constructor() {
    this.App = Router();
    this.Middleware();
    this.RoutesProtegidas();
  }

  Middleware() {
    this.App.use(Auth.ValidadeADadmin);
  }

  RoutesProtegidas() {
    this.App.post('/', Controller.Criar);
    this.App.get('/:Id', Controller.Buscar);
    this.App.get('/', Controller.BuscarTodos);
    this.App.get('/gerente/projeto/ccusto', Controller.BuscarProjetoseGerenteseCcusto);
    this.App.post('/filtrar/projetos', Controller.Filtrar);
    this.App.delete('/:Id', Controller.Apagar);
  }
}
module.exports = new RouteRegistro().App;
