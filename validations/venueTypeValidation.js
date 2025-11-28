const Joi = require("joi");

const createVenueTypeSchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),
  typeid: Joi.number().integer().optional().allow(null),
});

module.exports = { createVenueTypeSchema };
