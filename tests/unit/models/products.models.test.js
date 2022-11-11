/* const { expect } = require('chai');
const sinon = require('sinon');
const { passengerModel } = require('../../../src/models');

const connection = require('../../../src/models/connection');
const { products } = require('../../mocks/products');

describe('Testes de unidade do model de pessoas passageiras', function () {
  afterEach(sinon.restore);

  it('Recuperando a lista de produtos', async function () {
    sinon.stub(connection, 'execute').resolves([products]);
    const result = await passengerModel.findAll();
    expect(result).to.be.deep.equal(products);
  });

  it('Recuperando um produto a partir do seu id', async function () {
    sinon.stub(connection, 'execute').resolves([[products[0]]]);
    const result = await passengerModel.findById(1);
    expect(result).to.be.deep.equal(products[0]);
  });
}); */