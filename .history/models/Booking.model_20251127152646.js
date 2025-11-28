module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define(
    "Booking",
    {
      id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
      },
      customer_id: DataTypes.BIGINT,
      cart_id: DataTypes.BIGINT,
      createdAt: DataTypes.DATE,
      finishedAt: DataTypes.DATE,
      payment_method_id: DataTypes.SMALLINT,
      delivery_method_id: DataTypes.BIGINT,
      status_id: DataTypes.SMALLINT,
    },
    {
      timestamps: true,
      underscored: true,
    }
  );

  Booking.associate = (models) => {
    Booking.belongsTo(models.Customer, {
      foreignKey: "customer_id",
      as: "customer",
    });
    Booking.belongsTo(models.Cart, { foreignKey: "cart_id", as: "cart" });
    Booking.belongsTo(models.PaymentMethod, {
      foreignKey: "payment_method_id",
      as: "payment_method",
    });
    Booking.belongsTo(models.DeliveryMethod, {
      foreignKey: "delivery_method_id",
      as: "delivery_method",
    });
  };

  return Booking;
};
