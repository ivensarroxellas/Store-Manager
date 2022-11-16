const { expect } = require('chai');
const sinon = require('sinon');
const { productModel } = require('../../../src/models');;
const { productService } = require('../../../src/services');
const { products, productNotFound, invalidInput } = require('../mocks/products');

describe('Testes da camada Product Service', function () {
    afterEach(sinon.restore);
  it('Busca todos os produtos', async function () {
    sinon.stub(productModel, 'findAll').resolves(products);
    const result = await productService.findAll();
    expect(result.message).to.deep.equal(products);
  });
  it('Busca produto pelo ID', async function () {
    sinon.stub(productModel, 'findById').resolves(products[0]);
    const result = await productService.findById(1);
    expect(result.message).to.deep.equal(products[0]);
  });
  it('Verifica se retorna mensagem de erro caso não ache o produto', async function () {
    sinon.stub(productModel, 'findById').resolves(productNotFound);
    const result = await productService.findById(4);
    expect(result.message.message).to.deep.equal(productNotFound.message);
  });
  it('Verifica se retorna mensagem de erro caso ID não seja', async function () {
    sinon.stub(productModel, 'findById').resolves(invalidInput);
    const result = await productService.findById('dd');
    expect(result.message).to.deep.equal(invalidInput.message);
  });
});