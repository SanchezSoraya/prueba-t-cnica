const axios = require('axios').default;

axios.get("https://rickandmortyapi.com/api/character")
  .then((res) => {
    const nombrePersonajes = res.data.results.map((personaje) => {
      return personaje.name;
    })
    console.log(nombrePersonajes);
  })
  .catch((error) => {
    console.log(error.response.data);
  })

