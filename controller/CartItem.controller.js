const { CartItem, Cart, Ticket } = require("../models");

exports.createCartItem = async (req, res) => {
  try {
    const item = await CartItem.create(req.body);
    res.status(201).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getCartItems = async (req, res) => {
  try {
    const items = await CartItem.findAll({
      include: [
        { model: Cart, as: "cart" },
        { model: Ticket, as: "ticket" },
      ],
    });
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getCartItemById = async (req, res) => {
  try {
    const item = await CartItem.findByPk(req.params.id, {
      include: [
        { model: Cart, as: "cart" },
        { model: Ticket, as: "ticket" },
      ],
    });
    if (!item) return res.status(404).send("CartItem topilmadi");
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteCartItem = async (req, res) => {
  try {
    const item = await CartItem.findByPk(req.params.id);
    if (!item) return res.status(404).send("CartItem topilmadi");

    const itemData = item.toJSON();
    await item.destroy();
    res.status(200).send(itemData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
