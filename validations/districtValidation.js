const Joi = require("joi");

const validateDistrict = (data) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    region_id: Joi.number().integer().required(),
  });
  return schema.validate(data);
};

module.exports = { validateDistrict };