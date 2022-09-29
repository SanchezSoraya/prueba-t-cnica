function cadenaRecortada(texto) {

  if (texto.length > 20) {
    return texto.slice(0, 20) + "...";
  } else {
    return texto;
  }
}

