const Joi = require('joi');

const idSchema = Joi.number().integer().min(1).required();

const addProduct = Joi.object({
  name: Joi.string().min(3).required(),
});

const quantity = Joi.number().integer().min(1).required();

module.exports = {
  idSchema,
  addProduct,
  quantity,
};