const { category: catMsg, commonError } = require('../utils/response');
const Category = require('../models/category.model');

exports.getCategory = async (req, res) => {
  const { page = 1, limit = 5 } = req.query;
  const offset = (+page - 1) * +limit;

  try {
    const category = await Category.findAll({
      order: [['id', 'DESC']],
      limit: +limit,
      offset: offset,
    });

    return res.status(200).json({
      message: catMsg.getCategory,
      data: category,
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

exports.createCategory = async (req, res) => {
  try {
    const category = await Category.create({ ...req.body });
    return res.status(201).json({
      message: catMsg.createCategory,
      data: category,
    });
  } catch (error) {
    res.status(400).json({
      message: commonError.badRequest,
      error,
    });
  }
};

exports.updateCategory = async (req, res) => {
  try {
    const category = await Category.update(
      { ...req.body },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    return res.status(200).json({
      message: catMsg.updateCategory,
      data: category,
    });
  } catch (error) {
    res.status(400).json({
      message: commonError.badRequest,
      error,
    });
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.status(204).json({
      message: catMsg.deleteCategory,
    });
  } catch (error) {
    res.status(400).json({
      message: commonError.badRequest,
      error,
    });
  }
};
