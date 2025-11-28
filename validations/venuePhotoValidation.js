const Joi = require("joi");

const createVenuePhotoSchema = Joi.object({
  venue_id: Joi.number().integer().required(),
  url: Joi.string().uri().required(),
});

const updateVenuePhotoSchema = Joi.object({
  url: Joi.string().uri(),
});

module.exports = { createVenuePhotoSchema, updateVenuePhotoSchema };
