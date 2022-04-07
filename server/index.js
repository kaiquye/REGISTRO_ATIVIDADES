const Server = require('./src/index')
let app = new Server().App
app.listen(8081, ()=>{
    console.log('Servidor ligado...')
})