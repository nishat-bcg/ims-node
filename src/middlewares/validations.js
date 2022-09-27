const Joi = require('joi');
const { commonError } = require('../utils/response');

exports.productValidation = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().positive().required(),
    supplier_id: Joi.number().positive().required(),
    category_id: Joi.number().positive().required(),
  });
  const { error } = schema.validate({ ...req.body });

  if (error)
    return res.status(400).json({
      message: commonError.failed,
      error: error.details,
    });
  return next();
};

exports.productOrderValidation = (req, res, next) => {
  const schema = Joi.object({
    order_discount: Joi.number().positive().default(0),
    product_id: Joi.number().positive().required(),
    customer_id: Joi.number().positive().required(),
  });

  const { error } = schema.validate({ ...req.body });

  if (error)
    return res.status(400).json({
      message: commonError.failed,
      error: error.details,
    });
  return next();
};

exports.customerValidation = (req, res, next) => {
  const schema = Joi.object({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    last_name: Joi.string().optional(),
    address: Joi.string().required(),
    phone: Joi.string()
      .pattern(/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/)
      .required(),
    email: Joi.string().email().required(),
    group_id: Joi.number().required(),
  });

  const { error } = schema.validate({ ...req.body });

  if (error)
    return res.status(400).json({
      message: commonError.failed,
      error: error.details,
    });
  return next();
};
