const { productModel } = require('../models');
const { validateId /* validateNewProduct */ } = require('./validations/validationInputValues'); 

const findAll = async () => {
  const products = await productModel.findAll();
  if (products.length > 1) {
    const productsInOrder = products
      .sort((a, b) => a - b);
    return { type: null, message: productsInOrder };
  }
  return { type: null, message: products };
};

const findById = async (productId) => {
  const error = validateId(productId);
  if (error.type) return error;

  const product = await productModel.findById(productId);
  if (product) return { type: null, message: product };
};

  module.exports = {
    findAll,
    findById,
  };