const Joi = require("joi");

const validateCartItem = (data) => {
  const schema = Joi.object({
    cart_id: Joi.number().integer().required(),
    ticket_id: Joi.number().integer().required(),
  });
  return schema.validate(data);
};

module.exports = { validateCartItem };