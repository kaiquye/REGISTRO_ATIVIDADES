class Construir {
  static Querys({ Data, Setor, Ccusto, Email }) {
    console.log('tested', Data, Setor, Ccusto, Email)
    let Bindings = [];
    let Query = 'SELECT registros.*, projeto.setor, centrodecusto.setor as SETOR_CCUSTO FROM registros'
      + ' inner join projeto on projeto_id = projeto.id'
      + ' inner join centrodecusto on projeto.centrodecusto_id = centrodecusto.id where';
    if (Data !== undefined) {
      Query += ` datediff(now() ,registros.inicio) <= ${Data}`;
    }
    if (Ccusto !== undefined) {
      if (Data !== undefined) {
        Query += ' and projeto.centrodecusto_id = ?';
        Bindings.push(Number(Ccusto));
      } else {
        Query += ' projeto.centrodecusto_id = ?';
        Bindings.push(Number(Ccusto));
      }
    }
    if (Setor !== undefined) {
      if (Ccusto !== undefined || Data !== undefined) {
        Query += ' and projeto.setor like ?';
        Bindings.push(`${Setor}%`);
      } else {
        Query += ' projeto.setor like ?';
        Bindings.push(`${Setor}%`);
      }
    }
    if (Email !== undefined) {
      if (Ccusto !== undefined || Data !== undefined || Setor !== undefined) {
        Query += ' and registros.email like ?';
        Bindings.push(`${Email}%`);
      } else {
        Query += ' registros.email like ?';
        Bindings.push(`${Email}%`);
      }
    }
    console.log(Query)
    console.log(Bindings)
    return {
      Query,
      Bindings,
    };
  }
}
module.exports = Construir;
