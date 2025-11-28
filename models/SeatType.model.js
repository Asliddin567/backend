module.exports = (sequelize, DataTypes) => {
  const SeatType = sequelize.define(
    "SeatType",
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      timestamps: true,
      underscored: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );

  SeatType.associate = (models) => {
    SeatType.hasMany(models.Seat, { foreignKey: "seat_type_id", as: "seats" });
  };

  return SeatType;
};
