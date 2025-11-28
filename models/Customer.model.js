const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define(
    "Customer",
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      first_name: { type: DataTypes.STRING, allowNull: false },
      last_name: { type: DataTypes.STRING },
      phone: { type: DataTypes.STRING, allowNull: false, unique: true },
      email: {
        type: DataTypes.STRING,
        unique: true,
        validate: { isEmail: true },
      },
      hashed_password: { type: DataTypes.STRING },
      birth_date: { type: DataTypes.DATEONLY },
      gender: { type: DataTypes.ENUM("male", "female"), defaultValue: "male" },
      is_active: { type: DataTypes.BOOLEAN, defaultValue: true },
    },
    {
      timestamps: true,
      underscored: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );

  // Parolni hash qilish (agar kerak bo‘lsa)
  Customer.beforeCreate(async (customer) => {
    if (customer.hashed_password) {
      customer.hashed_password = await bcrypt.hash(
        customer.hashed_password,
        10
      );
    }
  });

  Customer.associate = (models) => {
    Customer.hasMany(models.CustomerAddress, {
      foreignKey: "customer_id",
      as: "addresses",
    });
    Customer.hasMany(models.CustomerCard, {
      foreignKey: "customer_id",
      as: "cards",
    });
  };

  return Customer;
};
