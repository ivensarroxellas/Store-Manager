const express = require('express');
const {
  findAllSales, findSalesById, createNewSale,
  updateSale, deleteSale } = require('../controllers/sales.controller');

/* const validateNewSaleIdField = require('../middlewares/validateNewSaleIdField'); */
/* const validateNewSaleQuantityField  = require('../middlewares/validateNewSaleQuantityField'); */

const router = express.Router();

router.get('/', findAllSales);
router.get('/:id', findSalesById);
router.post('/', /* validateNewSaleIdField *//* , validateNewSaleQuantityField */ createNewSale);
router.put('/:id', /* validateNewSaleIdField *//* , validateNewSaleQuantityField */ updateSale);
router.delete('/:id', deleteSale);

module.exports = router;