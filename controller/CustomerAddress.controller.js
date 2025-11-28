const { CustomerAddress, Customer, Region, District } = require("../models");
const {
  validateCustomerAddress,
} = require("../validations/customerAddressValidation");

exports.createCustomerAddress = async (req, res) => {
  const { error } = validateCustomerAddress(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const address = await CustomerAddress.create(req.body);
    res.status(201).send(address);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getCustomerAddresses = async (req, res) => {
  try {
    const addresses = await CustomerAddress.findAll({});
    res.status(200).send(addresses);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getCustomerAddressById = async (req, res) => {
  try {
    const address = await CustomerAddress.findByPk(req.params.id, {
      include: [{ model: Customer, as: "customer" }],
    });
    if (!address) return res.status(404).send("Address topilmadi");
    res.status(200).send(address);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateCustomerAddress = async (req, res) => {
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const address = await CustomerAddress.findByPk(req.params.id);
    if (!address) return res.status(404).send("Address topilmadi");
    await address.update(req.body);
    res.status(200).send(address);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteCustomerAddress = async (req, res) => {
  try {
    const address = await CustomerAddress.findByPk(req.params.id);
    if (!address) return res.status(404).send("Address topilmadi");

    const addressData = address.toJSON();
    await address.destroy();
    res.status(200).send(addressData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
