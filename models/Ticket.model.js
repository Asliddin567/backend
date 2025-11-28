module.exports = (sequelize, DataTypes) => {
  const Ticket = sequelize.define(
    "Ticket",
    {
      id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
      },
      event_id: DataTypes.BIGINT,
      seat_id: DataTypes.BIGINT,
      price: DataTypes.DECIMAL,
      service_fee: DataTypes.DECIMAL,
      status_id: DataTypes.SMALLINT,
      ticket_type: DataTypes.SMALLINT,
    },
    {
      timestamps: true,
      underscored: true,
    }
  );

  Ticket.associate = (models) => {
    Ticket.belongsTo(models.Event, { foreignKey: "event_id", as: "event" });
    Ticket.belongsTo(models.Seat, { foreignKey: "seat_id", as: "seat" });
    Ticket.belongsTo(models.TicketStatus, {
      foreignKey: "status_id",
      as: "status",
    });
  };

  return Ticket;
};
