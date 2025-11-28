const Joi = require("joi");

const createVenueSchema = Joi.object({
  name: Joi.string().min(3).max(200).required(),
  address: Joi.string().allow(null, ""),
  location: Joi.string().allow(null, ""),
  site: Joi.string().allow(null, ""),
  phone: Joi.string().allow(null, ""),
  venue_type_id: Joi.number().integer().required(),
  region_id: Joi.number().integer().required(),
  district_id: Joi.number().integer().required(),
  schema: Joi.string().allow(null, ""),
});

module.exports = { createVenueSchema };
