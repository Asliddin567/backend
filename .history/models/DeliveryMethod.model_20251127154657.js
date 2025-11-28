module.exports = (sequelize, DataTypes) => {
  const DeliveryMethod = sequelize.define(
    "DeliveryMethod",
    {
      id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
      },
      name: DataTypes.STRING,
    },
    {
      timestamps: true,
      underscored: true,
    }
  );

  DeliveryMethod.associate = (models) => {
    DeliveryMethod.hasMany(models.Booking, {
      foreignKey: "delivery_method_id",
      as: "bookings",
    });
  };

  return DeliveryMethod;
};
