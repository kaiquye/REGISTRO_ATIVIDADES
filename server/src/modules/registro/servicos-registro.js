class ServicosRegistro {
    async Criar(assunto, funcionario, email, projeto, termino) {
     try {
         // gerar uma chave (tokne) para cada registro
         // codigicar o token que não se repete
         // verificar se ja exite 
         await Criar(token_registro, assunto, funcionario, email, projeto, new Date(), termino);
     } catch (error) {
       throw new Error('Aconteceu algo inesperado.' + error.message)
     }
   }
 
   async BuscarRegistro(token_registro, ) {
     try {
         // token_registro = id bycripy
         // verificar se exite
         // verificar se o funcionario esta ativo
         return await BuscarUmRegistro(token_registro);
     } catch (error) {
      throw new Error('Aconteceu algo inesperado.' + error.message)
     } 
   }
 
   async BuscarTodosRegistro(){
       try {
           let registros = await BuscarTodos();
           return registros
       } catch (error) {
      throw new Error('Aconteceu algo inesperado.' + error.message)
       }
   }
 
   async UpdateRegistro(token_registro, assunto, funcionario, email, projeto, inicio,termino){
       try {
           //verificar se o registro exite.
           await AtualizarRegistro(token_registro, assunto, funcionario, email, projeto, inicio,termino)
       } catch (error) {
          throw new Error('Aconteceu algo inesperado.' + error.message)
       }
   }
 }
 
 module.exports = {
     BuscarRegistroToken : new ServicosRegistro().BuscarRegistro,
     CriarNovoRegistro : new ServicosRegistro().Criar,
     BuscarTodos : new ServicosRegistro().BuscarTodosRegistro,
     AtualizarRegistro : new ServicosRegistro().UpdateRegistro
 }