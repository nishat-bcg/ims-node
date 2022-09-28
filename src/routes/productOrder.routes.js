const express = require('express');

const productOrder = require('../controllers/productOrder.controller');

const { productOrderValidation } = require('../middlewares/validations');
const { notProductOrderFound } = require('../middlewares/notFound');

const router = express.Router();

router
  .route('/productOrders')
  .get(productOrder.getProductOrder)
  .post(productOrderValidation, productOrder.createProductOrder);

router
  .route('/productOrders/:id')
  .put(
    notProductOrderFound,
    productOrderValidation,
    productOrder.updateProductOrder
  )
  .delete(notProductOrderFound, productOrder.deleteProductOrder);

module.exports = router;
