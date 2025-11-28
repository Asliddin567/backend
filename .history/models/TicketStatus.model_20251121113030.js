module.exports = (sequelize, DataTypes) => {
  const TicketStatus = sequelize.define(
    "TicketStatus",
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

  return TicketStatus;
};
