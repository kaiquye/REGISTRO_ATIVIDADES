class Calcular {
  static CalcularHoras(Start, End) {
    const segundos = 1000;
    const minutos = 60;
    const horas = 60;
    const dias = 24;
    //  Calacular as horas trabalhadas Start - End = 1.000
    // ( esse numero representa as horas decorridas de cada registro )
    // Exemplo : Uma hora trabalhada 0.050 ||| Um dia trabalhado : Dias : 1.000;
    const start = new Date();
    const end = new Date(End.toString());
    const milissegundos = (start - end);
    const tempo = milissegundos / segundos / minutos / horas / dias;
    return tempo.toFixed(5);
  }
}
module.exports = Calcular;
