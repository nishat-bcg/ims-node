const express = require('express');

const customerGroup = require('../controllers/customerGroup.controller');

const router = express.Router();

router
  .route('/customerGroups')
  .get(customerGroup.getCustomerGroup)
  .post(customerGroup.createCustomerGroup);

router
  .route('/customerGroups/:id')
  .put(customerGroup.updateCustomerGroup)
  .delete(customerGroup.deleteCustomerGroup);

module.exports = router;
