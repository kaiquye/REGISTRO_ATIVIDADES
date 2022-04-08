const ConnectionDatabase = require('knex')({
  client: 'mysql',
  connection: {
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'gestao_registro',
  },
});

module.exports = { ConnectionDatabase };
