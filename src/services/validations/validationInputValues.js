const { idSchema, addProduct } = require('./schema');

const validateId = (id) => {
  const { error } = idSchema.validate(id);
  if (error) return { type: 'INPUT_VALUE', message: '"id" tem que ser um número' };
  return { type: null, message: '' };
};

const validateNewProduct = (name) => {
  const { error } = addProduct.validate(name);
  if (error) return { type: 'INPUT_VALUE', message: error.message };
  return { type: null, message: '' };
};

module.exports = {
  validateId,
  validateNewProduct,
};