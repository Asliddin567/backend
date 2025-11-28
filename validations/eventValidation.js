const Joi = require("joi");

const createEventSchema = Joi.object({
  name: Joi.string().min(3).max(200).required(),
  photo: Joi.string().allow(null, ""),
  start_time: Joi.date().iso().required(),
  finish_time: Joi.date().greater(Joi.ref("start_time")),
  info: Joi.string().allow(null, ""),
  event_type_id: Joi.number().integer().required(),
  human_category_id: Joi.number().integer().required(),
  venue_id: Joi.number().integer().required(),
  lang_id: Joi.number().integer().required(),
  release_date: Joi.date().iso().allow(null),
});

module.exports = { createEventSchema };
