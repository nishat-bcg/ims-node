const { commonError } = require('../utils/response');
const Category = require('../models/category.model');
const Product = require('../models/product.model');
const ProductOrder = require('../models/productOrder.model');
const Customer = require('../models/customer.model');

exports.notCategoryFound = async (req, res, next) => {
  try {
    const data = await Category.findByPk(req.params.id);

    if (data) return next();
    return res.status(404).json({
      message: commonError.notFound,
    });
  } catch (error) {
    return res.status(404).json({
      message: commonError.badRequest,
      error,
    });
  }
};

exports.notCustomerFound = async (req, res, next) => {
  try {
    const data = await Customer.findByPk(req.params.id);

    if (data) return next();
    return res.status(404).json({
      message: commonError.notFound,
    });
  } catch (error) {
    return res.status(404).json({
      message: commonError.badRequest,
      error,
    });
  }
};

exports.notProductFound = async (req, res, next) => {
  try {
    const data = await Product.findByPk(req.params.id);

    if (data) return next();
    return res.status(404).json({
      message: commonError.notFound,
    });
  } catch (error) {
    return res.status(404).json({
      message: commonError.badRequest,
      error,
    });
  }
};

exports.notProductOrderFound = async (req, res, next) => {
  try {
    const data = await ProductOrder.findByPk(req.params.id);

    if (data) return next();
    return res.status(404).json({
      message: commonError.notFound,
    });
  } catch (error) {
    return res.status(404).json({
      message: commonError.badRequest,
      error,
    });
  }
};
