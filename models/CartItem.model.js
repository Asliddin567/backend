module.exports = (sequelize, DataTypes) => {
  const CartItem = sequelize.define(
    "CartItem",
    {
      id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
      },
      cart_id: DataTypes.BIGINT,
      ticket_id: DataTypes.BIGINT,
    },
    {
      timestamps: true,
      underscored: true,
    }
  );

  CartItem.associate = (models) => {
    CartItem.belongsTo(models.Cart, { foreignKey: "cart_id", as: "cart" });
    CartItem.belongsTo(models.Ticket, {
      foreignKey: "ticket_id",
      as: "ticket",
    });
  };

  return CartItem;
};
