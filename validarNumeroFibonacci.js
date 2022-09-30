function validarNumeroFibonacci(numero) {
  let primerNumeroFibonacci = 0;
  let segundoNumeroFibonacci = 1;


  for (i = 0; i <= numero; i++) {
    if (primerNumeroFibonacci === numero || segundoNumeroFibonacci === numero) {
      return true;
    }

    primerNumeroFibonacci = primerNumeroFibonacci + segundoNumeroFibonacci;
    segundoNumeroFibonacci = segundoNumeroFibonacci + primerNumeroFibonacci;
  }
  return false;
}
