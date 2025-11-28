module.exports = (sequelize, DataTypes) => {
  const Venue = sequelize.define(
    "Venue",
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: DataTypes.STRING,
      location: DataTypes.STRING,
      site: DataTypes.STRING,
      phone: DataTypes.STRING,
      region_id: DataTypes.SMALLINT,
      district_id: DataTypes.SMALLINT,
      schema: DataTypes.TEXT,
    },
    {
      timestamps: true,
      underscored: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );

  Venue.associate = (models) => {
    Venue.belongsTo(models.VenueType, {
      foreignKey: "venue_type_id",
      as: "type",
    });
    Venue.belongsTo(models.Region, { foreignKey: "region_id", as: "region" });
    Venue.belongsTo(models.District, {
      foreignKey: "district_id",
      as: "district",
    });
    Venue.hasMany(models.VenuePhoto, { foreignKey: "venue_id", as: "photos" });
    Venue.hasMany(models.Event, { foreignKey: "venue_id", as: "events" });
    Venue.hasMany(models.Seat, { foreignKey: "venue_id", as: "seats" });
  };

  return Venue;
};
