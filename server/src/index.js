const express = require('express');
const { cors } = require('./midldlewares');

const registroRoute = require('./modules/registro/routes-registro');
const CentrodeCustoRoute = require('./modules/centrodecusto/routes-ccusto');

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
    this.App.use('/api/centrodecusto', [CentrodeCustoRoute]);
  }
}
module.exports = Server;
