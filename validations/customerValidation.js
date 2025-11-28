const Joi = require("joi");

const createCustomerSchema = Joi.object({
  first_name: Joi.string().min(2).max(50).required(),
  last_name: Joi.string().max(50),
  phone: Joi.string()
    .pattern(/^\+998\d{9}$/)
    .required(),
  email: Joi.string().email().allow(null, ""),
  password: Joi.string().min(6).allow(null, ""),
  birth_date: Joi.date().iso().allow(null),
  gender: Joi.string().valid("male", "female").default("male"),
  is_active: Joi.boolean().default(true),
});

const updateCustomerSchema = Joi.object({
  first_name: Joi.string().min(2).max(50),
  last_name: Joi.string().max(50),
  phone: Joi.string().pattern(/^\+998\d{9}$/),
  email: Joi.string().email(),
  birth_date: Joi.date().iso().allow(null),
  gender: Joi.string().valid("male", "female"),
  is_active: Joi.boolean(),
});

module.exports = { createCustomerSchema, updateCustomerSchema };
