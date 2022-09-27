const { productOrder, commonError } = require('../utils/response');

const ProductOrder = require('../models/productOrder.model');
const Customer = require('../models/customer.model');
const Product = require('../models/product.model');

exports.getProductOrder = async (req, res) => {
  const { page = 1, limit = 5 } = req.query;
  const offset = (+page - 1) * +limit;
  try {
    const data = await ProductOrder.findAll({
      order: [['id', 'DESC']],
      limit: +limit,
      offset: offset,
    });
    return res.json({
      message: productOrder.getProductOrder,
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

exports.createProductOrder = async (req, res) => {
  try {
    const data = await ProductOrder.create({ ...req.body });
    return res.json({
      message: productOrder.createProductOrder,
      data,
    });
  } catch (error) {
    res.status(400).json({
      message: commonError.badRequest,
      error,
    });
  }
};

exports.updateProductOrder = async (req, res) => {
  try {
    const data = await ProductOrder.update(
      { ...req.body },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    return res.json({
      message: productOrder.updateProductOrder,
      data,
    });
  } catch (error) {
    res.status(400).json({
      message: commonError.badRequest,
      error,
    });
  }
};

exports.deleteProductOrder = async (req, res) => {
  try {
    await ProductOrder.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.status(204).json({
      message: productOrder.deleteProductOrder,
    });
  } catch (error) {
    res.status(400).json({
      message: commonError.badRequest,
      error,
    });
  }
};
