const Joi = require("joi");

const validateTicketStatus = (data) => {
  const schema = Joi.object({
    name: Joi.string().required(),
  });
  return schema.validate(data);
};

module.exports = { validateTicketStatus };