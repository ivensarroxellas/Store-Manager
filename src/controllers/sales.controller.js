const salesService = require('../services/sales.service');
const productService = require('../models/product.model');

const findAllSales = async (_req, res) => {
  const { type, message } = await salesService.findAllSales();
  if (type) return res.status(404).json({ message: 'error' });
  res.status(200).json(message);
};

const findSalesById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await salesService.findSalesById(id);
  if (type) return res.status(404).json({ message: 'Sale not found' });
  res.status(200).json(message);
};

const createNewSale = async (req, res) => {
  const { body } = req;
  const { productId } = req.body;
  const { type } = await productService.findById(productId);
  if (type) return res.status(404).json({ message: 'Product not found' });
  const { id } = await salesService.createNewSale(body);
  res.status(201).json({ productId: id, itemsSold: body });
};

const updateSale = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const { productId } = req.body;
  const { type } = await productService.findById(productId);
  if (type) return res.status(404).json({ message: 'Product not found' });
  const { message } = await salesService.updateSale(id, body);
  res.status(200).json({ saleId: id, itemsUpdated: message });
};

const deleteSale = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await salesService.deleteSale(id);
  if (type) return res.status(404).json({ message });
  return res.status(204).json({ message });
};

module.exports = {
  findAllSales,
  findSalesById,
  createNewSale,
  updateSale,
  deleteSale,
};