const { Router } = require("express");
const { Criar } = require('./controller-ccusto')

class RouteCentrodeCusto {
  App;

  constructor() {
    this.App = Router();
    this.RoutesProtegidas();
  }

  RoutesProtegidas() {
    this.App.get("/", (req, res, next) => console.log("CentrodeCustoRoute get"));
    this.App.post("/", (req, res, next) => console.log("CentrodeCustoRoute post"));
  }
}
module.exports = new RouteCentrodeCusto().App;
