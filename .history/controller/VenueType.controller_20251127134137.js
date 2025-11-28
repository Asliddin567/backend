const { VenueType, Types } = require("../models");
const { createVenueTypeSchema } = require("../validations/venueTypeValidation");

exports.createVenueType = async (req, res) => {
  const { error } = createVenueTypeSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  try {
    const venueType = await VenueType.create(req.body);
    res.status(201).json(venueType);
  } catch (err) {
    if (err.name === "SequelizeUniqueConstraintError") {
      return res.status(400).json({ message: "Bu nom allaqachon mavjud" });
    }
    res.status(500).json({ message: err.message });
  }
};

// ✅ Get All Venue Types
exports.getVenueTypes = async (req, res) => {
  try {
    const venueTypes = await VenueType.findAll({});
    res.status(200).json(venueTypes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Get Venue Type by ID
exports.getVenueTypeById = async (req, res) => {
  try {
    const venueType = await VenueType.findByPk(req.params.id, {
      include: [{ model: Types, as: "type" }],
    });

    if (!venueType)
      return res.status(404).json({ message: "Maydoncha turi topilmadi" });

    res.status(200).json(venueType);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Update Venue Type
exports.updateVenueType = async (req, res) => {
  if (error) return res.status(400).json({ message: error.details[0].message });

  try {
    const venueType = await VenueType.findByPk(req.params.id);
    if (!venueType)
      return res.status(404).json({ message: "Maydoncha turi topilmadi" });

    await venueType.update(req.body);
    res.status(200).json(venueType);
  } catch (err) {
    if (err.name === "SequelizeUniqueConstraintError") {
      return res.status(400).json({ message: "Bu nom allaqachon mavjud" });
    }
    res.status(500).json({ message: err.message });
  }
};

// ✅ Delete Venue Type
exports.deleteVenueType = async (req, res) => {
  try {
    const venueType = await VenueType.findByPk(req.params.id);
    if (!venueType)
      return res.status(404).json({ message: "Maydoncha turi topilmadi" });

    await venueType.destroy();
    res.status(200).json({ message: "Maydoncha turi o‘chirildi" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
