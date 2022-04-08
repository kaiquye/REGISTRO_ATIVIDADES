class Calcular {
  static CalcularHoras(Inicio, termino) {
    const date1 = new Date(Inicio);
    const date2 = new Date(termino);
    // diferença entre o numero ate o 0
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    // arrendondar o numero
    const Decorrido = (timeDiff / (1000 * 3600 * 24));
    return Decorrido;
  }
}
module.exports = Calcular;
