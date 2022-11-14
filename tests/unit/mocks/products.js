const products = [
  {
    "id": 1,
    "name": "Martelo de Thor"
  },
  {
    "id": 2,
    "name": "Traje de encolhimento"
  },
  {
    "id": 3,
    "name": "Escudo do Capitão América"
  }
]

const productNotFound = { "message": "Product not found" };

const invalidInput = { type: 'INPUT_VALUE', message: '"id" tem que ser um número' };

module.exports = {
  products,
  productNotFound,
  invalidInput,
}