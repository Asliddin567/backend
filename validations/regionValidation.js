const Joi = require("joi");

const validateRegion = (data) => {
  const schema = Joi.object({
    name: Joi.string().required(),
  });
  return schema.validate(data);
};

module.exports = { validateRegion };