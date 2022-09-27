const express = require('express');

const customer = require('../controllers/customer.controller');

const { customerValidation } = require('../middlewares/validations');

const { notCustomerFound } = require('../middlewares/notFound');

const router = express.Router();

router
  .route('/customers')
  .get(customer.getCustomer)
  .post(customerValidation, customer.createCustomer);

router
  .route('/customers/:id')
  .patch(notCustomerFound, customerValidation, customer.updateCustomer)
  .delete(notCustomerFound, customer.deleteCustomer);

module.exports = router;
