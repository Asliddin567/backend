const { SeatType } = require("../models");
const { createSeatTypeSchema, updateSeatTypeSchema } = require("../validations/seatTypeValidation");

exports.createSeatType = async (req, res) => {
  const { error } = createSeatTypeSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  try {
    const seatType = await SeatType.create(req.body);
    res.status(201).json(seatType);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getSeatTypes = async (req, res) => {
  try {
    const seatTypes = await SeatType.findAll();
    res.json(seatTypes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getSeatTypeById = async (req, res) => {
  try {
    const seatType = await SeatType.findByPk(req.params.id);
    if (!seatType) return res.status(404).json({ message: "O‘rindiq turi topilmadi" });
    res.json(seatType);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateSeatType = async (req, res) => {
  const { error } = updateSeatTypeSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  try {
    const seatType = await SeatType.findByPk(req.params.id);
    if (!seatType) return res.status(404).json({ message: "O‘rindiq turi topilmadi" });
    await seatType.update(req.body);
    res.json(seatType);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteSeatType = async (req, res) => {
  try {
    const seatType = await SeatType.findByPk(req.params.id);
    if (!seatType) return res.status(404).json({ message: "O‘rindiq turi topilmadi" });
    await seatType.destroy();
    res.json({ message: "O‘rindiq turi o‘chirildi" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};