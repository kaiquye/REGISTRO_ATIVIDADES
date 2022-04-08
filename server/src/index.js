const express = require('express');
const { cors } = require('./midldlewares');

const registroRoute = require('./modules/registro/routes-registro');
const centrodeCustoRoute = require('./modules/centrodecusto/routes-ccusto');
const gerenteRoute = require('./modules/gerente/routes-gerente');
const projetoRoute = require('./modules/projeto/router-projeto');

class Server {
  App;

  constructor() {
    this.App = express();
    this.middlewares();
    this.Routes();
  }

  middlewares() {
    this.App.use(cors());
    this.App.use(express.json());
  }

  Routes() {
    this.App.use('/api/registro', [registroRoute]);
    this.App.use('/api/centrodecusto', [centrodeCustoRoute]);
    this.App.use('/api/gerente', [gerenteRoute]);
    this.App.use('/api/projeto', [projetoRoute]);
  }
}
module.exports = Server;
