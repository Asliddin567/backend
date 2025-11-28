const { TicketStatus } = require("../models");

exports.createTicketStatus = async (req, res) => {
  try {
    const status = await TicketStatus.create(req.body);
    res.status(201).send(status);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getTicketStatuses = async (req, res) => {
  try {
    const statuses = await TicketStatus.findAll();
    res.status(200).send(statuses);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getTicketStatusById = async (req, res) => {
  try {
    const status = await TicketStatus.findByPk(req.params.id);
    if (!status) return res.status(404).send("TicketStatus topilmadi");
    res.status(200).send(status);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateTicketStatus = async (req, res) => {
  try {
    const status = await TicketStatus.findByPk(req.params.id);
    if (!status) return res.status(404).send("TicketStatus topilmadi");
    await status.update(req.body);
    res.status(200).send(status);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteTicketStatus = async (req, res) => {
  try {
    const status = await TicketStatus.findByPk(req.params.id);
    if (!status) return res.status(404).send("TicketStatus topilmadi");

    const statusData = status.toJSON();
    await status.destroy();
    res.status(200).send(statusData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};