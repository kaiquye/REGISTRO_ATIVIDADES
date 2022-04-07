const {CriarNovoRegistro, BuscarRegistroToken, BuscarTodos, AtualizarRegistro } = require('./servicos-registro')

class RegistroController {
   async Criar(req, res, next) {
    try {
        //gerar uma chave (tokne) para cada registro
        // VERIFICAR SE O PROJETO EXITE
        let {assunto, funcionario, email, projeto, termino} = req.body
        await CriarNovoRegistro(assunto, funcionario, email, projeto, new Date(), termino);
        res.status(201).json({ message : ' Registro criado com sucesso !' })
    } catch (error) {
        next(error)
        res.status(500).json({ message : error.message })
    }
  }

  async BuscarRegistro(req, res, next) {
    try {
        // token_registro = id bycripy
        let {token_registro} = req.params
        let registro = await BuscarRegistroToken(token_registro);
        if(registro) return res.status(200).json({data : registro})
        if(!registro) return res.status(400).json({ message : 'registro não existe !' })
    } catch (error) {
        next(error)
        res.status(500).json({ message : error.message })
    } 
  }

  async BuscarTodosRegistro(req, res, next){
      try {
          let registros = await BuscarTodos();
          if(registro) return res.status(200).json({data : registros})
          if(!registros) return res.status(400).json({message : 'Não existe registros'})
      } catch (error) {
        next(error)
          res.status(500).json({message : data.message})
      }
  }

  async UpdateRegistro(req, res, next){
      try {
          let {token_registro} = req.params
          let {assunto, funcionario, email, projeto, inicio,termino} = req.body;
          await AtualizarRegistro(token_registro, assunto, funcionario, email, projeto, inicio,termino)
      } catch (error) {
          next(error)
        res.status(500).json({message : data.message})
      }
  }
}
module.exports = {
    Criar : new RegistroController().Criar,
    Buscar : new RegistroController().BuscarRegistro,
    BuscarTodos : new RegistroController().BuscarTodosRegistro,
    Update : new RegistroController().UpdateRegistro
}