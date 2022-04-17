class ValidarBody {
  static ValidarRequest(params) {
    for (let i = 0; params.length > i; i++) {
      if (!params[i]) {
        return new Error('Erro. Preencha todos os campos');
      }
    }
  }
}
module.exports = ValidarBody;
