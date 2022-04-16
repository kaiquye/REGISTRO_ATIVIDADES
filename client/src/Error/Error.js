export class Error {

  static ErrorServer() {
    return ({
      status: 404,
      message: 'Nossos servidores estão desligados.',
    })
  }
  static ErrorAuth() {
    return ({
      status: 401,
      message: 'Você não tem permissão.',
    })
  }
  static Error() {
    return ({
      status: 500,
      message: 'Entre em contato com um Adm.',
    })
  }
}
