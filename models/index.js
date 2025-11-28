const Sequelize = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();

const sequelize = require("../config/database");

const Admin = require("./Admin.model")(sequelize, Sequelize);
const Booking = require("./Booking.model")(sequelize, Sequelize);
const Cart = require("./Cart.model")(sequelize, Sequelize);
const CartItem = require("./CartItem.model")(sequelize, Sequelize);
const Customer = require("./Customer.model")(sequelize, Sequelize);
const CustomerAddress = require("./CustomerAddress.model")(
  sequelize,
  Sequelize
);
const CustomerCard = require("./CustomerCard.model")(sequelize, Sequelize);

const DeliveryMethod = require("./DeliveryMethod.model")(sequelize, Sequelize);
const District = require("./District.model")(sequelize, Sequelize);
const Event = require("./Event.model")(sequelize, Sequelize);
const EventType = require("./EventType.model")(sequelize, Sequelize);
const HumanCategory = require("./HumanCategory.model")(sequelize, Sequelize);
const Lang = require("./Lang.model")(sequelize, Sequelize);
const PaymentMethod = require("./PaymentMethod.model")(sequelize, Sequelize);
const Region = require("./Region.model")(sequelize, Sequelize);
const Seat = require("./Seat.model")(sequelize, Sequelize);
const SeatType = require("./SeatType.model")(sequelize, Sequelize);
const Ticket = require("./Ticket.model")(sequelize, Sequelize);
const TicketStatus = require("./TicketStatus.model")(sequelize, Sequelize);
const Types = require("./Types.model")(sequelize, Sequelize);
const Venue = require("./Venue.model")(sequelize, Sequelize);
const VenuePhoto = require("./VenuePhoto.model")(sequelize, Sequelize);
const VenueType = require("./VenueType.model")(sequelize, Sequelize);

// Har bir modelning associate funksiyasini chaqirish (agar mavjud bo‘lsa)
Admin.associate?.(sequelize.models);
Booking.associate?.(sequelize.models);
Cart.associate?.(sequelize.models);
CartItem.associate?.(sequelize.models);
Customer.associate?.(sequelize.models);
CustomerAddress.associate?.(sequelize.models);
CustomerCard.associate?.(sequelize.models);
DeliveryMethod.associate?.(sequelize.models);
District.associate?.(sequelize.models);
Event.associate?.(sequelize.models);
EventType.associate?.(sequelize.models);
HumanCategory.associate?.(sequelize.models);
Lang.associate?.(sequelize.models);
PaymentMethod.associate?.(sequelize.models);
Region.associate?.(sequelize.models);
Seat.associate?.(sequelize.models);
SeatType.associate?.(sequelize.models);
Ticket.associate?.(sequelize.models);
TicketStatus.associate?.(sequelize.models);
Types.associate?.(sequelize.models);
Venue.associate?.(sequelize.models);
VenuePhoto.associate?.(sequelize.models);
VenueType.associate?.(sequelize.models);

// Export qilish
module.exports = {
  sequelize,
  Admin,
  Booking,
  Cart,
  CartItem,
  Customer,
  CustomerAddress,
  CustomerCard,
  DeliveryMethod,
  District,
  Event,
  EventType,
  HumanCategory,
  Lang,
  PaymentMethod,
  Region,
  Seat,
  SeatType,
  Ticket,
  TicketStatus,
  Types,
  Venue,
  VenuePhoto,
  VenueType,
};
