const express = require("express");
const dotenv = require("dotenv");
const { sequelize } = require("./models");
const cors = require("cors");
const setupSwagger = require("./swagger/swagger");

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors({ origin: "*" }));

const bookingRoutes = require("./routes/bookingRoutes");
const cartRoutes = require("./routes/cartRoutes");
const cartItemRoutes = require("./routes/cartItemRoutes");
const customerCard = require("./routes/customerCard");
const customerRoutes = require("./routes/customerRoutes");
const deliveryMethodRoutes = require("./routes/deliveryMethodRoutes");
const districtRoutes = require("./routes/districtRoutes");
const eventRoutes = require("./routes/eventRoutes");
const eventTypeRoutes = require("./routes/eventTypeRoutes");
const humanCategoryRoutes = require("./routes/humanCategoryRoutes");
const langRoutes = require("./routes/langRoutes");
const paymentMethodRoutes = require("./routes/paymentMethodRoutes");
const regionRoutes = require("./routes/regionRoutes");
const seatRoutes = require("./routes/seatRoutes");
const seatTypeRoutes = require("./routes/seatTypeRoutes");
const ticketRoutes = require("./routes/ticketRoutes");
const ticketStatusRoutes = require("./routes/ticketStatusRoutes");
const typesRoutes = require("./routes/Types");
const venuePhoto = require("./routes/venuePhoto");
const venueRoutes = require("./routes/venueRoutes");
const venueTypeRoutes = require("./routes/venueTypeRoutes");
const adminRoutes = require("./routes/adminRoutes");
const customerAddressRoutes = require("./routes/customerAddress");

app.use("/api", adminRoutes);
app.use("/api", bookingRoutes);
app.use("/api", cartRoutes);
app.use("/api", cartItemRoutes);
app.use("/api", customerAddressRoutes);
app.use("/api", customerCard);
app.use("/api", customerRoutes);
app.use("/api", deliveryMethodRoutes);
app.use("/api", districtRoutes);
app.use("/api", eventRoutes);
app.use("/venue-types", eventTypeRoutes);
app.use("/api", humanCategoryRoutes);
app.use("/api", langRoutes);
app.use("/api", paymentMethodRoutes);
app.use("/api", regionRoutes);
app.use("/api", seatRoutes);
app.use("/api", seatTypeRoutes);
app.use("/api", ticketRoutes);
app.use("/api", ticketStatusRoutes);
app.use("/api", typesRoutes);
app.use("/api", venuePhoto);
app.use("/api", venueRoutes);
app.use("/api", venueTypeRoutes);

setupSwagger(app);

const PORT = process.env.PORT || 5555;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
