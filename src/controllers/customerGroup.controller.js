const { customerGroup, commonError } = require('../utils/response');

const CustomerGroup = require('../models/customerGroup.model');

exports.getCustomerGroup = async (req, res) => {
  const { page = 1, limit = 5 } = req.query;
  const offset = (+page - 1) * +limit;

  try {
    const data = await CustomerGroup.findAll({
      order: [['id', 'DESC']],
      limit: +limit,
      offset: offset,
    });

    return res.status(200).json({
      message: customerGroup.getCustomerGroup,
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

exports.createCustomerGroup = async (req, res) => {
  try {
    const data = await CustomerGroup.create({ ...req.body });
    return res.status(201).json({
      message: customerGroup.createCustomerGroup,
      data,
    });
  } catch (error) {
    res.status(400).json({
      message: commonError.badRequest,
      error,
    });
  }
};

exports.updateCustomerGroup = async (req, res) => {
  try {
    const data = await CustomerGroup.update(
      { ...req.body },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    return res.status(200).json({
      message: customerGroup.updateCustomerGroup,
      data,
    });
  } catch (error) {
    res.status(400).json({
      message: commonError.badRequest,
      error,
    });
  }
};

exports.deleteCustomerGroup = async (req, res) => {
  try {
    await CustomerGroup.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.status(204).json({
      message: customerGroup.deleteCustomerGroup,
    });
  } catch (error) {
    res.status(400).json({
      message: commonError.badRequest,
      error,
    });
  }
};
