const { DeliveryMethod } = require("../models");

exports.createDeliveryMethod = async (req, res) => {
  try {
    const method = await DeliveryMethod.create(req.body);
    res.status(201).send(method);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getDeliveryMethods = async (req, res) => {
  try {
    const methods = await DeliveryMethod.findAll();
    res.status(200).send(methods);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getDeliveryMethodById = async (req, res) => {
  try {
    const method = await DeliveryMethod.findByPk(req.params.id);
    if (!method) return res.status(404).send("DeliveryMethod topilmadi");
    res.status(200).send(method);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateDeliveryMethod = async (req, res) => {
  try {
    const method = await DeliveryMethod.findByPk(req.params.id);
    if (!method) return res.status(404).send("DeliveryMethod topilmadi");
    await method.update(req.body);
    res.status(200).send(method);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteDeliveryMethod = async (req, res) => {
  try {
    const method = await DeliveryMethod.findByPk(req.params.id);
    if (!method) return res.status(404).send("DeliveryMethod topilmadi");

    const methodData = method.toJSON();
    await method.destroy();
    res.status(200).send(methodData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};