const express = require('express');
const { productController } = require('../controllers');

const validateNewProductField = require('../middlewares/validateNewProductField');

const router = express.Router();

router.get('/', productController.listProducts);
router.get('/:id', productController.getProduct);
router.post('/', validateNewProductField, productController.createProduct);

module.exports = router;