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

  return DeliveryMethod;
};
