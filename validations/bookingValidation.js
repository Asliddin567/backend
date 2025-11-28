const Joi = require("joi");

const validateBooking = (data) => {
  const schema = Joi.object({
    customer_id: Joi.number().integer().required(),
    cart_id: Joi.number().integer(),
    payment_method_id: Joi.number().integer(),
    delivery_method_id: Joi.number().integer(),
    status_id: Joi.number().integer(),
  });
  return schema.validate(data);
};

module.exports = { validateBooking };