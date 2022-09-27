const { product, commonError } = require('../utils/response');

const Product = require('../models/product.model');
const Supplier = require('../models/supplier.model');
const Category = require('../models/category.model');

exports.getProduct = async (req, res) => {
  const { page = 1, limit = 5 } = req.query;
  const offset = (+page - 1) * +limit;

  try {
    const data = await Product.findAll({
      order: [['id', 'DESC']],
      limit: +limit,
      offset: offset,
    });
    return res.json({
      message: product.getProduct,
      data,
      page: +page,
      limit: +limit,
    });
  } catch (error) {
    res.status(400).json({
      message: commonError.failed,
      error,
    });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const data = await Product.create({ ...req.body });
    return res.json({
      message: product.createProduct,
      data,
    });
  } catch (error) {
    res.status(400).json({
      message: commonError.badRequest,
      error,
    });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const data = await Product.update(
      { ...req.body },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    return res.status(200).json({
      message: product.updateProduct,
      data,
    });
  } catch (error) {
    res.status(400).json({
      message: commonError.badRequest,
      error,
    });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    await Product.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.status(204).json({
      message: product.deleteProduct,
    });
  } catch (error) {
    res.status(400).json({
      message: commonError.badRequest,
      error,
    });
  }
};
