const { CriarNovoRegistro, BuscarRegistroToken, BuscarTodos, AtualizarRegistro } = require('./servicos-registro')

class ControllerCentroDeCusto {
   async Criar(req, res, next) {
    try {
        // gerar uma chave (tokne) para cada registro
        // VERIFICAR SE O PROJETO EXITE
        let {setor, gastos, livres, empresa} = req.body
        await CriarNovoRegistro(setor, gastos, livres, empresa);
        res.status(201).json({ message : ' Registro criado com sucesso !' })
    } catch (error) {
        next(error)
        res.status(500).json({ message : error.message })
    }
  }

  async Buscar(req, res, next) {
    try {
        // token_registro = id bycripy
        let {token_registro} = req.params
        let Ccusto = await BuscarCcusto(token_registro);
        if(registro) return res.status(200).json({data : Ccusto})
        if(!registro) return res.status(400).json({ message : 'registro não centro de custo !' })
    } catch (error) {
        next(error)
        res.status(500).json({ message : error.message })
    } 
  }

  async BuscarTodos(req, res, next){
      try {
          let Ccusto = await BuscarTodosCcusto();
          if(Ccusto) return res.status(200).json({data : Ccusto})
          if(!Ccusto) return res.status(400).json({message : 'Não existe Ccusto'})
      } catch (error) {
        next(error)
          res.status(500).json({message : data.message})
      }
  }

  async Update(req, res, next){
      try {
          let {token_registro} = req.params
          let {setor, gastos, livres, empresa} = req.body;
          await AtualizarRegistro(setor, gastos, livres, empresa)
          res.status(200).json({message : 'Centro de custo atualizado'})
      } catch (error) {
          next(error)
        res.status(500).json({message : data.message})
      }
  }
}
module.exports = {
    Criar : new ControllerCentroDeCusto().Criar,
    Buscar : new ControllerCentroDeCusto().Buscar,
    Uptade : new ControllerCentroDeCusto().Update,
    BuscarTodos : new ControllerCentroDeCusto().BuscarTodos
}