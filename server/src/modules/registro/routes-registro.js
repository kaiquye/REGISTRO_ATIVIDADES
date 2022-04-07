const { Router } = require("express");
const { Criar, Buscar, BuscarTodos, Update } = require('./controller-registro')

class RouteRegistro {
  App;

  constructor() {
    this.App = Router();
    this.RoutesProtegidas();
  }

  RoutesProtegidas() {
    this.App.post("/", Criar);
    this.App.get("/:token_registro", Buscar);
    this.App.get("/", BuscarTodos)
    this.App.patch('/:token_registro', Update)
  }
}
module.exports =  new RouteRegistro().App
