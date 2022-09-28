const express = require('express');

const supplier = require('../controllers/supplier.controller');
const { notCategoryFound } = require('../middlewares/notFound');

const router = express.Router();

router
  .route('/suppliers')
  .get(supplier.getSupplier)
  .post(supplier.createSupplier);

router
  .route('/suppliers/:id')
  .put(notCategoryFound, supplier.updateSupplier)
  .delete(supplier.deleteSupplier);

module.exports = router;
