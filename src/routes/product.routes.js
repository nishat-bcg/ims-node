const express = require('express');

const {
  createProduct,
  deleteProduct,
  getProduct,
  updateProduct,
} = require('../controllers/product.controller');

const { productValidation } = require('../middlewares/validations');
const { notProductFound } = require('../middlewares/notFound');

const router = express.Router();

router
  .route('/products')
  .get(getProduct)
  .post(productValidation, createProduct);

router
  .route('/products/:id')
  .put(productValidation, notProductFound, updateProduct)
  .delete(notProductFound, deleteProduct);

module.exports = router;
