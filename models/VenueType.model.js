module.exports = (sequelize, DataTypes) => {
  const VenueType = sequelize.define(
    "VenueType",
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
      typeid: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
    },
    {
      timestamps: true,
      underscored: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );

  VenueType.associate = (models) => {
    VenueType.hasMany(models.Venue, {
      foreignKey: "venue_type_id",
      as: "venues",
    });
    VenueType.belongsTo(models.Types, { foreignKey: "typeid", as: "type" });
  };

  return VenueType;
};
