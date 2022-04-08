class Calcular {
  static CalcularHoras(Inicio, termino) {
    const Decorrido = Inicio.getTime() - termino.getTime();
    if (Decorrido < 1) throw new Error('Não foi possivel calcular as horas trabalhadas. Inicio menor do que termino');
  }
}
module.exports = Calcular;
