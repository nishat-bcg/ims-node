const express = require('express');

const category = require('../controllers/category.controllers');

const router = express.Router();

router
  .route('/categories')
  .get(category.getCategory)
  .post(category.createCategory);

router
  .route('/categories/:id')
  .put(category.updateCategory)
  .delete(category.deleteCategory);

module.exports = router;
