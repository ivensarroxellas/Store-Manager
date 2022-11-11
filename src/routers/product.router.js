const express = require('express');
const { productController } = require('../controllers');

/* const validateNewProductFild = require('../middlewares/validateNewPassengerField'); */

const router = express.Router();

router.get('/', productController.listProducts);
router.get('/:id', productController.getProduct);
/* router.post('/', validateNewProductFild, productController.getProduct); */

module.exports = router;