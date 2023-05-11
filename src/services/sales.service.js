const salesModel = require('../models/sales.model');
const { validateQuantity } = require('./validations/validationInputValues');

const findAllSales = async () => {
  const sales = await salesModel.findAllSales();
  return { type: null, message: sales };
};

const findSalesById = async (saleId) => {
  const sale = await salesModel.findSalesById(saleId);
  if (sale.length === 0) return { type: 'NOT_FOUND', message: 'Sale not found' };
  return { type: null, message: sale };
};

const createNewSale = async (SaleInfo) => {
  const { quantity } = SaleInfo[0];
  const error = validateQuantity({ quantity });
  if (error.type) return error;

  const { id } = await salesModel.createNewSale(SaleInfo);
  return { type: null, message: id };
};

const updateSale = async (saleId, SaleArr) => {
  const sale = await salesModel.getSaleById(saleId);
  if (!sale) return { type: 'NOT_FOUND', message: 'Sale not found' };
  SaleArr.map((Sale) => salesModel.updateSale(saleId, Sale));
  return { type: null, message: SaleArr };
};

const deleteSale = async (id) => {
  await salesModel.deleteSale(id);
  return { type: null, message: 'Sale deleted' };
};

module.exports = {
  findAllSales,
  findSalesById,
  createNewSale,
  updateSale,
  deleteSale,
};