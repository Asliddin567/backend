const { Event, EventType, HumanCategory, Venue, Lang } = require("../models");
const { createEventSchema } = require("../validations/eventValidation");

exports.createEvent = async (req, res) => {
  const { error } = createEventSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  try {
    const event = await Event.create(req.body);
    res.status(201).json(event);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getEvents = async (req, res) => {
  try {
    const events = await Event.findAll({});
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getEventById = async (req, res) => {
  try {
    const event = await Event.findByPk(req.params.id, {
      include: [
        { model: EventType, as: "type" },
        { model: HumanCategory, as: "category" },
        { model: Venue, as: "venue" },
        { model: Lang, as: "language" },
      ],
    });
    if (!event) return res.status(404).json({ message: "Tadbir topilmadi" });
    res.json(event);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateEvent = async (req, res) => {
  if (error) return res.status(400).json({ message: error.details[0].message });

  try {
    const event = await Event.findByPk(req.params.id);
    if (!event) return res.status(404).json({ message: "Tadbir topilmadi" });
    await event.update(req.body);
    res.json(event);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteEvent = async (req, res) => {
  try {
    const event = await Event.findByPk(req.params.id);
    if (!event) return res.status(404).json({ message: "Tadbir topilmadi" });
    await event.destroy();
    res.json({ message: "Tadbir o‘chirildi" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
