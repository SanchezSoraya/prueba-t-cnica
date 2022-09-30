function numeroPar(numero) {
  if (numero % 2 === 0) {
    return true;
  }
  return false;

}

function arregloNumerosOrdenados(array) {
  const arrayOrdenado = array.sort().reverse();
  let contadorPares = 0
  for (i = 0; i <= array.length; i++) {
    if (numeroPar(array[i])) {
      contadorPares = contadorPares + 1;
    }
  }
  return [arrayOrdenado, contadorPares];
}


console.log(arregloNumerosOrdenados([1, 5, 2, 4]));
console.log(arregloNumerosOrdenados([1, 20, 7, 98, 0, 3]));
