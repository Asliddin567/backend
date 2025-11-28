const Joi = require("joi");

const createSeatTypeSchema = Joi.object({
  name: Joi.string().min(2).max(50).required(),
});

const updateSeatTypeSchema = Joi.object({
  name: Joi.string().min(2).max(50),
});

module.exports = { createSeatTypeSchema, updateSeatTypeSchema };
