const { productService } = require('../services');

const listProducts = async (_req, res) => {
  const { type, message } = await productService.findAll();

  if (type) return res.status(404).json({ message: 'error' });
  return res.status(200).json(message);
};

 const getProduct = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productService.findById(id);
   
  if (type) return res.status(404).json({ message: 'Product not found' });
  return res.status(200).json(message);
};

const createProduct = async (req, res) => {
  const { name } = req.body;
  const { type, message } = await productService.createNewProduct(name);
  if (type) return res.status(444).json({ message: 'Erro na criação' });
  return res.status(201).json(message);
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const { type, message } = await productService.updateProduct(id, name);
  if (type) return res.status(404).json({ message });
  return res.status(200).json({ id, name });
};

module.exports = {
  listProducts,
  getProduct,
  createProduct,
  updateProduct,
};