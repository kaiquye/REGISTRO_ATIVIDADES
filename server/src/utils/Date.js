class Datas {
  static DataNovoRegistro(Data) {
    // Gerando uma nova data para salvar no banco.
    const DateParser = Date.parse(Data);
    const DateMls = new Date(DateParser);
    return DateMls;
  }
}

module.exports = Datas;
