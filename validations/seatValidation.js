const Joi = require("joi");

const createSeatSchema = Joi.object({
  venue_id: Joi.number().integer().required(),
  seat_type_id: Joi.number().integer().required(),
  sector: Joi.number().integer().allow(null),
  row_number: Joi.number().integer().allow(null),
  number: Joi.number().integer().allow(null),
  location_in_schema: Joi.string().allow(null, ""),
});

module.exports = { createSeatSchema };
