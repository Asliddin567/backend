const Joi = require("joi");

const createCartSchema = Joi.object({
  customer_id: Joi.number().integer().required(),
  status_id: Joi.number().integer(),
});

module.exports = { createCartSchema };
