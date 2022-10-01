const cars = [
  {
    brand: "Toyota",
    model: 2020,
    color: "negro"
  },
  {
    brand: "ford",
    model: 2005,
    color: "gris"
  },
  {
    brand: "chevrolet",
    model: 1999,
    color: "azul"
  },
  {
    brand: "nissan",
    model: 2018,
    color: "negro"
  },
  {
    brand: "suzuki",
    model: 2021,
    color: "vino tinto"
  },
  {
    brand: "BMW",
    model: 2010,
    color: "azul>"
  },
]

const carrosFiltrados = cars.filter(auto => auto.model >= 2018);
console.log(carrosFiltrados);

