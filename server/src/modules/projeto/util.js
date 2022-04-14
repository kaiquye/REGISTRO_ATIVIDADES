class Construir {
  static Querys(Gerente = undefined, Setor = undefined, Ccusto = undefined) {
    console.log('tested', Gerente, Setor, Ccusto)
    let Bindings = [];
    let Query = 'SELECT projeto.*, gerente.nome as gerente, ccusto.setor as setor_ccusto from projeto'
      + ' inner join gerente on projeto.gerente_id = gerente.id'
      + ' inner join centrodecusto as ccusto on  ccusto.id = projeto.centrodecusto_id where';
    if (Gerente !== undefined) {
      Query += ' projeto.gerente_id  = ?';
      Bindings.push(Gerente);
    }
    if (Ccusto !== undefined && Ccusto !== undefined) {
      if (Gerente !== undefined) {
        Query += ' and centrodecusto_id = ?';
        Bindings.push(Number(Ccusto));
      } else {
        Query += ' centrodecusto_id = ?';
        Bindings.push(Number(Ccusto));
      }
    }
    if (Setor !== undefined) {
      if (Ccusto !== undefined || Gerente !== undefined) {
        Query += ' and projeto.setor = ?';
        Bindings.push(Setor);
      } else {
        Query += ' projeto.setor = ?';
        Bindings.push(Setor);
      }
    }
    return {
      Query,
      Bindings,
    };
  }
}
module.exports = Construir;
