const Joi = require("joi");

const validatePaymentMethod = (data) => {
  const schema = Joi.object({
    name: Joi.string().required(),
  });
  return schema.validate(data);
};

module.exports = { validatePaymentMethod };