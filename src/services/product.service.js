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

  module.exports = {
    findAll,
    findById,
  };