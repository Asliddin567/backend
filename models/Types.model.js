module.exports = (sequelize, DataTypes) => {
  const Types = sequelize.define(
    "Types",
    {
      id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
      },
      name: DataTypes.STRING,
    },
    {
      tableName: "types",
      timestamps: true,
      underscored: true,
    }
  );

  Types.associate = (models) => {
    Types.hasMany(models.VenueType, {
      foreignKey: "type_id",
      as: "venueTypes",
    });
  };

  return Types;
};
