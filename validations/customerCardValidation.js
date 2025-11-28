const Joi = require("joi");

const validateCustomerCard = (data) => {
  const schema = Joi.object({
    customer_id: Joi.number().integer().required(),
    name: Joi.string().required(),
    phone: Joi.string(),
    year: Joi.string().length(4),
    month: Joi.string().length(2),
    is_active: Joi.boolean(),
    is_main: Joi.boolean(),
  });
  return schema.validate(data);
};

module.exports = { validateCustomerCard };