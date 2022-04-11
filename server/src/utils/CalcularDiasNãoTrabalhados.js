class CalcularDiasNaoTrabalhados {
  // 3 || 5 || 7 || 8 || 10 || 12
  static CalcularDiasDoMes = function (Mes) {
    if (Mes == '1' || '3' || '5' || '7' || '8' || '10' || '12') {
      return [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
        31];
    } else if (Mes == '2' || '4' || '6' || '9' || '11') {
      return [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30];
    } else {
      throw new Error('Mês não informado.');
    }
  };

  static Calcular = function (TodosRegistros, Dias) {
    const DiasTrabalhadosRepts = [];
    for (let b = 0; Dias.length > b; ++b) {
      for (let i = 0; TodosRegistros.length > i; ++i) {
        if (new Date(TodosRegistros[i].inicio).getDate() === Dias[b]) {
          DiasTrabalhadosRepts.push(Dias[b]);
        }
      }
    }
    const DiasTrabalhados = [... new Set(DiasTrabalhadosRepts)];
    for (let i = 0; DiasTrabalhados.length > i; ++i) {
      const Dia = Dias.indexOf(DiasTrabalhados[i]);
      Dias.splice(Dia, 1);
    }
    return Dias;
  };
}

module.exports = CalcularDiasNaoTrabalhados;
