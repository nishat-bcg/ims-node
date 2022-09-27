const { customer, commonError } = require('../utils/response');
const Customer = require('../models/customer.model');
const CustomerGroup = require('../models/customerGroup.model');

exports.getCustomer = async (req, res) => {
  const { page = 1, limit = 5 } = req.query;
  const offset = (+page - 1) * +limit;
  try {
    const data = await Customer.findAll({
      include: {
        model: CustomerGroup,
        as: 'group',
        attributes: ['id', 'name'],
      },
      order: [['id', 'DESC']],
      limit: +limit,
      offset: offset,
    });
    return res.json({
      message: customer.getCustomer,
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

exports.createCustomer = async (req, res) => {
  try {
    const data = await Customer.create({ ...req.body });
    return res.json({
      message: customer.createCustomer,
      data,
    });
  } catch (error) {
    res.status(400).json({
      message: commonError.badRequest,
      error,
    });
  }
};

exports.updateCustomer = async (req, res) => {
  try {
    const data = await Customer.update(
      { ...req.body },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    return res.status(200).json({
      message: customer.updateCustomer,
      data,
    });
  } catch (error) {
    res.status(400).json({
      message: commonError.badRequest,
      error,
    });
  }
};

exports.deleteCustomer = async (req, res) => {
  try {
    await Customer.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.status(204).json({
      message: customer.deleteCustomer,
    });
  } catch (error) {
    res.status(400).json({
      message: commonError.badRequest,
      error,
    });
  }
};
