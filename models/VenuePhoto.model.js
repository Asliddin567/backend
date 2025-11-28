module.exports = (sequelize, DataTypes) => {
  const VenuePhoto = sequelize.define(
    "VenuePhoto",
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      venue_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: true,
      underscored: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );

  VenuePhoto.associate = (models) => {
    VenuePhoto.belongsTo(models.Venue, { foreignKey: "venue_id", as: "venue" });
  };

  return VenuePhoto;
};
