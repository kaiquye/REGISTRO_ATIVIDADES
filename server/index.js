const Server = require('./src/index');

const App = new Server();

App.App.listen(8081, () => {
  console.log('Servidor ligado...🤡');
});
