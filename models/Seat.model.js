module.exports = (sequelize, DataTypes) => {
  const Seat = sequelize.define("Seat", {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    venue_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    seat_type_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    sector: DataTypes.SMALLINT,
    row_number: DataTypes.SMALLINT,
    number: DataTypes.SMALLINT,
    location_in_schema: DataTypes.STRING,
  }, {
    timestamps: true,
    underscored: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  });

  Seat.associate = (models) => {
    Seat.belongsTo(models.Venue, { foreignKey: "venue_id", as: "venue" });
    Seat.belongsTo(models.SeatType, { foreignKey: "seat_type_id", as: "type" });
    Seat.hasMany(models.Ticket, { foreignKey: "seat_id", as: "tickets" });
  };

  return Seat;
};