const chai = require('chai');
const { expect } = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);
const { productService } = require('../../../src/services');
const { productController } = require('../../../src/controllers');
const { products, productNotFound } = require('../mocks/products');

describe('Testes da camada Product Controler', function () {
  afterEach(sinon.restore);
  it('Verifica se ao buscar todos os produtos, o status do retorno é 200', async function () {
    sinon.stub(productService, 'findAll').resolves(products);
    const req = {};
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    await productController.listProducts(req, res);
    expect(res.status).to.have.been.calledWith(200);
  });
  it('Verifica se ao buscar um único produto, o status do retorno é 200', async function () {
    sinon.stub(productService, 'findById').resolves(products[0]);
    const req = { params: { id: 1 } };
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    await productController.getProduct(req, res);
    expect(res.status).to.have.been.calledWith(200);
  });
  it('Verifica se ao buscar um único produto inexistente, o status do retorno é 404', async function () {
    sinon.stub(productService, 'findById').resolves(productNotFound);
    const req = { params: { id: 4 } };
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    await productController.getProduct(req, res);
    expect(res.json).to.have.been.calledWith(productNotFound.message);
  });
});