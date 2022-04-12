class Construir {
  static Querys(Gerente = undefined, Setor = undefined, Ccusto = undefined) {
    console.log('tested', Gerente, Setor, Ccusto)
    let Bindings = [];
    let Query = 'SELECT projeto.*, gerente.nome as gerente, ccusto.setor as setor_ccusto from projeto'
      + ' inner join gerente on projeto.gerente_id = gerente.id'
      + ' inner join centrodecusto as ccusto on  ccusto.id = projeto.centrodecusto_id where';

    if (Gerente > 0 && Gerente !== undefined) {
      Query += ' projeto.gerente_id  = ?';
      Bindings.push(Number(Gerente));
    }
    if (Ccusto !== undefined && Ccusto !== null && Ccusto > 0) {
      if (Gerente > 0 && Gerente !== undefined) {
        Query += ' and centrodecusto_id = ?';
        Bindings.push(Number(Ccusto));
      } else {
        Query += ' centrodecusto_id = ?';
        Bindings.push(Number(Ccusto));
      }
    }
    if (Setor !== undefined && Setor !== null) {
      if (Ccusto !== undefined || Gerente !== undefined) {
        Query += ' and projeto.setor = ?';
        Bindings.push(Setor);
      } else {
        Query += ' setor = ?';
        Bindings.push(Setor);
      }
    }
    console.log(Query)
    console.log(...Bindings)
    return {
      Query,
      Bindings,
    };
  }
}
module.exports = Construir;
