const { supplier, commonError } = require('../utils/response');

const Supplier = require('../models/supplier.model');

exports.getSupplier = async (req, res) => {
  const { page = 1, limit = 5 } = req.query;
  const offset = (+page - 1) * +limit;

  try {
    const data = await Supplier.findAll({
      order: [['id', 'DESC']],
      limit: +limit,
      offset: offset,
    });

    return res.status(200).json({
      message: supplier.getSupplier,
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

exports.createSupplier = async (req, res) => {
  try {
    const data = await Supplier.create({ ...req.body });
    return res.status(201).json({
      message: supplier.createSupplier,
      data,
    });
  } catch (error) {
    res.status(400).json({
      message: commonError.badRequest,
      error,
    });
  }
};

exports.updateSupplier = async (req, res) => {
  try {
    const data = await Supplier.update(
      { ...req.body },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    return res.status(200).json({
      message: supplier.updateSupplier,
      data,
    });
  } catch (error) {
    res.status(400).json({
      message: commonError.badRequest,
      error,
    });
  }
};

exports.deleteSupplier = async (req, res) => {
  try {
    await Supplier.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.status(204).json({
      message: supplier.deleteSupplier,
    });
  } catch (error) {
    res.status(400).json({
      message: commonError.badRequest,
      error,
    });
  }
};
