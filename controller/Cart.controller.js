const { Cart, Customer, CartItem, Types } = require("../models");
const { createCartSchema } = require("../validations/cartValidation");

exports.createCart = async (req, res) => {
  const { error } = createCartSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  try {
    const cart = await Cart.create(req.body);
    res.status(201).json(cart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getCarts = async (req, res) => {
  try {
    const carts = await Cart.findAll({});
    res.json(carts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getCartById = async (req, res) => {
  try {
    const cart = await Cart.findByPk(req.params.id, {
      include: [
        {
          model: Customer,
          as: "customer",
          attributes: ["id", "first_name", "phone"],
        },
      ],
    });
    if (!cart) return res.status(404).json({ message: "Savat topilmadi" });
    res.json(cart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateCart = async (req, res) => {
  if (error) return res.status(400).json({ message: error.details[0].message });

  try {
    const cart = await Cart.findByPk(req.params.id);
    if (!cart) return res.status(404).json({ message: "Savat topilmadi" });
    await cart.update(req.body);
    res.json(cart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteCart = async (req, res) => {
  try {
    const cart = await Cart.findByPk(req.params.id);
    if (!cart) return res.status(404).json({ message: "Savat topilmadi" });
    await cart.destroy();
    res.json({ message: "Savat o‘chirildi" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
