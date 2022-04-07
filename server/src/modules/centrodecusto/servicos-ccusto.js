class ServicosCcusto {
  async CriarCcusto(setor, gastos, livres, empresa) {
    try {
      // gerar uma chave (tokne) para cada registro
      // codigicar o token que não se repete
      // verificar se ja exite
      await Criar(setor, gastos, livres, empresa);
    } catch (error) {
      throw new Error("Aconteceu algo inesperado." + error.message);
    }
  }

  async BuscarCcusto(token_ccusto) {
    try {
      // token_registro = id bycripy
      // verificar se exite
      // verificar se o funcionario esta ativo
      return await Buscar(token_ccusto);
    } catch (error) {
      throw new Error("Aconteceu algo inesperado." + error.message);
    }
  }

  async BuscarTodosCcusto() {
    try {
      let cccusto = await BuscarTodos();
      return registros;
    } catch (error) {
      throw new Error("Aconteceu algo inesperado." + error.message);
    }
  }

  async UpdateCcusto(
    etor, gastos, livres, empresa
  ) {
    try {
      //verificar se o registro exite.
      await Update(
        etor, gastos, livres, empresa
      );
    } catch (error) {
      throw new Error("Aconteceu algo inesperado." + error.message);
    }
  }
}

module.exports = {
  BuscarCcusto: new ServicosCcusto().BuscarCcusto,
  CriarCcusto: new ServicosCcusto().CriarCcusto,
  BuscarTodosCcusto: new ServicosCcusto().BuscarTodosCcusto,
  UpdateCcusto: new ServicosCcusto().UpdateCcusto,
};
