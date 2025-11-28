const { Customer, CustomerAddress, CustomerCard } = require("../models");
const { createCustomerSchema, updateCustomerSchema } = require("../validations/customerValidation");

exports.createCustomer = async (req, res) => {
  const { error } = createCustomerSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  try {
    const customer = await Customer.create(req.body);
    const { hashed_password, ...safe } = customer.toJSON();
    res.status(201).json(safe);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getCustomers = async (req, res) => {
  try {
    const customers = await Customer.findAll({
      attributes: { exclude: ["hashed_password"] },
      include: [
        { model: CustomerAddress, as: "addresses" },
        { model: CustomerCard, as: "cards" },
      ],
    });
    res.json(customers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getCustomerById = async (req, res) => {
  try {
    const customer = await Customer.findByPk(req.params.id, {
      attributes: { exclude: ["hashed_password"] },
      include: [
        { model: CustomerAddress, as: "addresses" },
        { model: CustomerCard, as: "cards" },
      ],
    });
    if (!customer) return res.status(404).json({ message: "Mijoz topilmadi" });
    res.json(customer);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateCustomer = async (req, res) => {
  const { error } = updateCustomerSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  try {
    const customer = await Customer.findByPk(req.params.id);
    if (!customer) return res.status(404).json({ message: "Mijoz topilmadi" });
    await customer.update(req.body);
    const { hashed_password, ...safe } = customer.toJSON();
    res.json(safe);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteCustomer = async (req, res) => {
  try {
    const customer = await Customer.findByPk(req.params.id);
    if (!customer) return res.status(404).json({ message: "Mijoz topilmadi" });
    await customer.destroy();
    res.json({ message: "Mijoz o'chirildi" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};