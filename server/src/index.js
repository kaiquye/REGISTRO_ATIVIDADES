require('dotenv').config();
const express = require('express');
const { cors, Auth } = require('./midldlewares');

const registroRoute = require('./modules/registro/routes-registro');
const centrodeCustoRoute = require('./modules/centrodecusto/routes-ccusto');
const gerenteRoute = require('./modules/gerente/routes-gerente');
const projetoRoute = require('./modules/projeto/router-projeto');
const administradorRoute = require('./modules/administrador/routes-administrador');

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
    this.App.use(Auth.ValidadeAD);
  }

  Routes() {
    this.App.use('/api/login', [administradorRoute]);
    this.App.use('/api/registro', [registroRoute]);
    this.App.use('/api/centrodecusto', [centrodeCustoRoute]);
    this.App.use('/api/gerente', [gerenteRoute]);
    this.App.use('/api/projeto', [projetoRoute]);
  }
}
module.exports = Server;
