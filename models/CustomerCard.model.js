module.exports = (sequelize, DataTypes) => {
  const CustomerCard = sequelize.define(
    "CustomerCard",
    {
      id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
      },
      customer_id: DataTypes.BIGINT,
      name: DataTypes.STRING,
      phone: DataTypes.STRING,
      year: DataTypes.CHAR(4),
      month: DataTypes.CHAR(2),
      is_active: { type: DataTypes.BOOLEAN, defaultValue: true },
      is_main: DataTypes.BOOLEAN,
    },
    {
      timestamps: true,
      underscored: true,
    }
  );

  CustomerCard.associate = (models) => {
    CustomerCard.belongsTo(models.Customer, {
      foreignKey: "customer_id",
      as: "customer",
    });
  };

  return CustomerCard;
};
