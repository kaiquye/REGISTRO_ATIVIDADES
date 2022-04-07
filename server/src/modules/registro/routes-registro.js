const { Router } = require("express");

class RouteRegistro {
  App;

  constructor() {
    this.App = Router();
    this.RoutesProtegidas();
  }

  RoutesProtegidas() {
    this.App.get("/", (req, res, next) => console.log("teste get"));
    this.App.post("/", (req, res, next) => console.log("teste post"));
  }
}
module.exports =  new RouteRegistro().App
