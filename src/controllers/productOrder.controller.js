const { productOrder, commonError } = require('../utils/response');

const ProductOrder = require('../models/productOrder.model');
const Customer = require('../models/customer.model');
const Product = require('../models/product.model');

exports.getProductOrder = async (req, res) => {
  const { page = 1, limit = 5 } = req.query;
  const offset = (+page - 1) * +limit;
  try {
    const data = await ProductOrder.findAll({
      include: [
        {
          model: Customer,
          as: 'customer',
          attributes: ['first_name', 'last_name', 'phone', 'email'],
        },
        {
          model: Product,
          as: 'product',
          attributes: ['name', 'price'],
        },
      ],
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
    const order_date = new Date().toISOString();
    const product = await Product.findByPk(req.body.product_id);
    let total_price =
      product.get('price') -
      (product.get('price') * req.body.order_discount) / 100;

    const data = await ProductOrder.create({
      ...req.body,
      order_date,
      total_price,
    });

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
    const product = await Product.findByPk(req.body.product_id);
    let total_price =
      product.get('price') -
      (product.get('price') * req.body.order_discount) / 100;

    let body = {
      ...req.body,
      total_price,
    };

    const data = await ProductOrder.update(
      { ...body },
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
