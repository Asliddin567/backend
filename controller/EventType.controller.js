const { EventType } = require("../models");
const { validateEventType } = require("../validations/eventTypeValidation");

exports.createEventType = async (req, res) => {
  const { error } = validateEventType(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const type = await EventType.create(req.body);
    res.status(201).send(type);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getEventTypes = async (req, res) => {
  try {
    const types = await EventType.findAll();
    res.status(200).send(types);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getEventTypeById = async (req, res) => {
  try {
    const type = await EventType.findByPk(req.params.id);
    if (!type) return res.status(404).send("EventType topilmadi");
    res.status(200).send(type);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateEventType = async (req, res) => {
  const { error } = validateEventType(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const type = await EventType.findByPk(req.params.id);
    if (!type) return res.status(404).send("EventType topilmadi");
    await type.update(req.body);
    res.status(200).send(type);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteEventType = async (req, res) => {
  try {
    const type = await EventType.findByPk(req.params.id);
    if (!type) return res.status(404).send("EventType topilmadi");

    const typeData = type.toJSON();
    await type.destroy();
    res.status(200).send(typeData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};