const { VenuePhoto } = require("../models");
const {
  createVenuePhotoSchema,
  updateVenuePhotoSchema,
} = require("../validations/venuePhotoValidation");

exports.createVenuePhoto = async (req, res) => {
  const { error } = createVenuePhotoSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  try {
    const photo = await VenuePhoto.create(req.body);
    res.status(201).json(photo);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getVenuePhotos = async (req, res) => {
  try {
    const photos = await VenuePhoto.findAll();
    res.json(photos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getVenuePhotoById = async (req, res) => {
  try {
    const photo = await VenuePhoto.findByPk(req.params.id, {
      include: [{ model: Venue, as: "venue" }],
    });

    if (!photo) {
      return res.status(404).json({ message: "Rasm topilmadi" });
    }

    res.json(photo);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateVenuePhoto = async (req, res) => {
  const { error } = updateVenuePhotoSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  try {
    const photo = await VenuePhoto.findByPk(req.params.id);
    if (!photo) return res.status(404).json({ message: "Rasm topilmadi" });
    await photo.update(req.body);
    res.json(photo);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteVenuePhoto = async (req, res) => {
  try {
    const photo = await VenuePhoto.findByPk(req.params.id);
    if (!photo) return res.status(404).json({ message: "Rasm topilmadi" });
    await photo.destroy();
    res.json({ message: "Rasm o‘chirildi" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
