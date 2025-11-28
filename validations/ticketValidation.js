const Joi = require("joi");

const validateTicket = (data) => {
  const schema = Joi.object({
    event_id: Joi.number().integer().required(),
    seat_id: Joi.number().integer().required(),
    price: Joi.number().positive().required(),
    service_fee: Joi.number().positive(),
    status_id: Joi.number().integer(),
    ticket_type: Joi.number().integer(),
  });
  return schema.validate(data);
};

module.exports = { validateTicket };