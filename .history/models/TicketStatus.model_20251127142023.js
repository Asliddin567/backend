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

  TicketStatus.associate = (models) => {
    TicketStatus.hasMany(models.Ticket, {
      foreignKey: "status_id",
      as: "tickets",
    });
  };

  return TicketStatus;
};
