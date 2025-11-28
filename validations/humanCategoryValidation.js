const Joi = require("joi");

const validateHumanCategory = (data) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    start_age: Joi.number().integer(),
    finish_age: Joi.number().integer(),
    gender: Joi.string().valid("male", "female", "both"),
  });
  return schema.validate(data);
};

module.exports = { validateHumanCategory };