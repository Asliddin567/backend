const { Ticket, Event, Seat, TicketStatus } = require("../models");
const { Op } = require("sequelize");
const { validateTicket } = require("../validations/ticketValidation");

exports.createTicket = async (req, res) => {
  const { error } = validateTicket(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const ticket = await Ticket.create(req.body);
    res.status(201).send(ticket);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getTickets = async (req, res) => {
  try {
    const tickets = await Ticket.findAll({
      include: [
        { model: Event, as: "event" },
        { model: Seat, as: "seat" },
        { model: TicketStatus, as: "status" }
      ]
    });
    res.status(200).send(tickets);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getTicketById = async (req, res) => {
  try {
    const ticket = await Ticket.findByPk(req.params.id, {
      include: [
        { model: Event, as: "event" },
        { model: Seat, as: "seat" },
        { model: TicketStatus, as: "status" }
      ]
    });
    if (!ticket) return res.status(404).send("Ticket topilmadi");
    res.status(200).send(ticket);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateTicket = async (req, res) => {
  const { error } = validateTicket(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const ticket = await Ticket.findByPk(req.params.id);
    if (!ticket) return res.status(404).send("Ticket topilmadi");
    await ticket.update(req.body);
    res.status(200).send(ticket);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findByPk(req.params.id);
    if (!ticket) return res.status(404).send("Ticket topilmadi");

    const ticketData = ticket.toJSON();
    await ticket.destroy();
    res.status(200).send(ticketData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};