const { Seat, Venue, SeatType } = require("../models");
const { createSeatSchema } = require("../validations/seatValidation");

exports.createSeat = async (req, res) => {
  const { error } = createSeatSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  try {
    const seat = await Seat.create(req.body);
    res.status(201).json(seat);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getSeats = async (req, res) => {
  try {
    const seats = await Seat.findAll({});
    res.json(seats);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getSeatById = async (req, res) => {
  try {
    const seat = await Seat.findByPk(req.params.id, {
      include: [
        { model: Venue, as: "venue", attributes: ["name"] },
        { model: SeatType, as: "type" },
      ],
    });
    if (!seat) return res.status(404).json({ message: "O‘rindiq topilmadi" });
    res.json(seat);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateSeat = async (req, res) => {
  if (error) return res.status(400).json({ message: error.details[0].message });

  try {
    const seat = await Seat.findByPk(req.params.id);
    if (!seat) return res.status(404).json({ message: "O‘rindiq topilmadi" });
    await seat.update(req.body);
    res.json(seat);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteSeat = async (req, res) => {
  try {
    const seat = await Seat.findByPk(req.params.id);
    if (!seat) return res.status(404).json({ message: "O‘rindiq topilmadi" });
    await seat.destroy();
    res.json({ message: "O‘rindiq o‘chirildi" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
