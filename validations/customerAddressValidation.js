const Joi = require("joi");

const validateCustomerAddress = (data) => {
  const schema = Joi.object({
    customer_id: Joi.number().integer().required(),
    country: Joi.string().min(2).required(),
    city: Joi.string().min(2).required(),
    district: Joi.string().min(2).required(),
    street: Joi.string().min(2).required(),
    postal_code: Joi.string().allow(null, "").max(20),
  });

  return schema.validate(data);
};

module.exports = { validateCustomerAddress };
