const {
  Booking,
  Customer,
  Cart,
  PaymentMethod,
  DeliveryMethod,
} = require("../models");
const { validateBooking } = require("../validations/bookingValidation");

exports.createBooking = async (req, res) => {
  const { error } = validateBooking(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const booking = await Booking.create(req.body);
    res.status(201).send(booking);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking.findAll({});
    res.status(200).send(bookings);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findByPk(req.params.id, {
      include: [
        { model: Customer, as: "customer" },
        { model: Cart, as: "cart" },
      ],
    });
    if (!booking) return res.status(404).send("Booking topilmadi");
    res.status(200).send(booking);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateBooking = async (req, res) => {
  const { error } = validateBooking(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const booking = await Booking.findByPk(req.params.id);
    if (!booking) return res.status(404).send("Booking topilmadi");
    await booking.update(req.body);
    res.status(200).send(booking);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteBooking = async (req, res) => {
  try {
    const booking = await Booking.findByPk(req.params.id);
    if (!booking) return res.status(404).send("Booking topilmadi");

    const bookingData = booking.toJSON();
    await booking.destroy();
    res.status(200).send(bookingData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
