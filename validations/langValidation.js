const Joi = require("joi");

const validateLang = (data) => {
  const schema = Joi.object({
    name: Joi.string().required(),
  });
  return schema.validate(data);
};

module.exports = { validateLang };