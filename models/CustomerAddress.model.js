
module.exports = (sequelize, DataTypes) => {
  const CustomerAddress = sequelize.define("CustomerAddress", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    district: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    street: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    postal_code: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  CustomerAddress.associate = (models) => {
    CustomerAddress.belongsTo(models.Customer, {
      foreignKey: "customer_id",
      as: "customer",
    });
  };

  return CustomerAddress;
};
