const Joi = require("joi");

const validateTypes = (data) => {
  const schema = Joi.object({
    name: Joi.string().required(),
  });
  return schema.validate(data);
};

module.exports = { validateTypes };