const express = require('express');
const { listProducts, getProduct, createProduct,
  updateProduct } = require('../controllers/product.controller');

const validateNewProductField = require('../middlewares/validateNewProductField');

const router = express.Router();

router.get('/', listProducts);
router.get('/:id', getProduct);
router.post('/', validateNewProductField, createProduct);
router.put('/:id', validateNewProductField, updateProduct);

module.exports = router;