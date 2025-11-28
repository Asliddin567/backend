const { PaymentMethod } = require("../models");

exports.createPaymentMethod = async (req, res) => {
  try {
    const method = await PaymentMethod.create(req.body);
    res.status(201).send(method);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getPaymentMethods = async (req, res) => {
  try {
    const methods = await PaymentMethod.findAll();
    res.status(200).send(methods);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getPaymentMethodById = async (req, res) => {
  try {
    const method = await PaymentMethod.findByPk(req.params.id);
    if (!method) return res.status(404).send("PaymentMethod topilmadi");
    res.status(200).send(method);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updatePaymentMethod = async (req, res) => {
  try {
    const method = await PaymentMethod.findByPk(req.params.id);
    if (!method) return res.status(404).send("PaymentMethod topilmadi");
    await method.update(req.body);
    res.status(200).send(method);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deletePaymentMethod = async (req, res) => {
  try {
    const method = await PaymentMethod.findByPk(req.params.id);
    if (!method) return res.status(404).send("PaymentMethod topilmadi");

    const methodData = method.toJSON();
    await method.destroy();
    res.status(200).send(methodData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};