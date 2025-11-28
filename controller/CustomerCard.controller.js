const { CustomerCard, Customer } = require("../models");
const {
  validateCustomerCard,
} = require("../validations/customerCardValidation");

exports.createCustomerCard = async (req, res) => {
  const { error } = validateCustomerCard(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const card = await CustomerCard.create(req.body);
    res.status(201).send(card);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getCustomerCards = async (req, res) => {
  try {
    const cards = await CustomerCard.findAll({});
    res.status(200).send(cards);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getCustomerCardById = async (req, res) => {
  try {
    const card = await CustomerCard.findByPk(req.params.id, {
      include: [{ model: Customer, as: "customer" }],
    });
    if (!card) return res.status(404).send("Card topilmadi");
    res.status(200).send(card);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateCustomerCard = async (req, res) => {
  const { error } = validateCustomerCard(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const card = await CustomerCard.findByPk(req.params.id);
    if (!card) return res.status(404).send("Card topilmadi");
    await card.update(req.body);
    res.status(200).send(card);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteCustomerCard = async (req, res) => {
  try {
    const card = await CustomerCard.findByPk(req.params.id);
    if (!card) return res.status(404).send("Card topilmadi");

    const cardData = card.toJSON();
    await card.destroy();
    res.status(200).send(cardData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
