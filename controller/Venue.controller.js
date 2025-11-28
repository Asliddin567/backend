const { Venue, VenueType, Region, District, VenuePhoto } = require("../models");
const {
  createVenueSchema,
  updateVenueSchema,
} = require("../validations/venueValidation");

exports.createVenue = async (req, res) => {
  const { error } = createVenueSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  try {
    const venue = await Venue.create(req.body);
    res.status(201).json(venue);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getVenues = async (req, res) => {
  try {
    const venues = await Venue.findAll({});
    res.json(venues);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getVenueById = async (req, res) => {
  try {
    const venue = await Venue.findByPk(req.params.id, {
      include: [
        { model: VenueType, as: "type" },
        { model: Region, as: "region" },
        { model: District, as: "district" },
        { model: VenuePhoto, as: "photos" },
      ],
    });
    if (!venue) return res.status(404).json({ message: "Maydoncha topilmadi" });
    res.json(venue);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateVenue = async (req, res) => {
  const { error } = updateVenueSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  try {
    const venue = await Venue.findByPk(req.params.id);
    if (!venue) return res.status(404).json({ message: "Maydoncha topilmadi" });
    await venue.update(req.body);
    res.json(venue);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteVenue = async (req, res) => {
  try {
    const venue = await Venue.findByPk(req.params.id);
    if (!venue) return res.status(404).json({ message: "Maydoncha topilmadi" });
    await venue.destroy();
    res.json({ message: "Maydoncha o‘chirildi" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
