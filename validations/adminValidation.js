const Joi = require("joi");

const createAdminSchema = Joi.object({
  name: Joi.string().min(2).max(50).required(),
  login: Joi.string().min(4).max(30).required(),
  hashed_password: Joi.string().min(6).required(),
  is_active: Joi.boolean().default(true),
  is_creator: Joi.boolean().default(false),
});

const updateAdminSchema = Joi.object({
  name: Joi.string().min(2).max(50),
  login: Joi.string().min(4).max(30),
  hashed_password: Joi.string().min(6),
  is_active: Joi.boolean(),
  is_creator: Joi.boolean(),
});

module.exports = { createAdminSchema, updateAdminSchema };