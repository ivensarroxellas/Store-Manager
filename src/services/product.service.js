const { productModel } = require('../models');
const { validateId /* validateNewProduct */ } = require('./validations/validationInputValues'); 

const findAll = async () => {
  const products = await productModel.findAll();
  return { type: null, message: products };
};

const findById = async (productId) => {
  const error = validateId(productId);
  if (error.type) return error;

  const product = await productModel.findById(productId);
  if (!product) return { type: 'NOT_FOUND', message: 'Product not found' };
  if (product) return { type: null, message: product };
};

const createNewProduct = async (productName) => {
  const newProductId = await productModel.createProduct(productName);
  return { type: null, message: { id: newProductId, name: productName } };
};

const updateProduct = async (productId, productName) => {
  const product = await productModel.findById(productId);
  if (!product) return { type: 'NOT_FOUND', message: 'Product not found' };
  await productModel.updateProduct(productId, productName);
  return { type: null, message: productId };
};

const deleteProduct = async (productId) => {
  const product = await productModel.findById(productId);
  if (!product) return { type: 'NOT_FOUND', message: 'Product not found' };
  await productModel.deleteProduct(productId);
  return { type: null, message: 'Deletado com sucesso' };
};

  module.exports = {
    findAll,
    findById,
    createNewProduct,
    updateProduct,
    deleteProduct,
  };