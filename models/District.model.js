module.exports = (sequelize, DataTypes) => {
  const District = sequelize.define(
    "District",
    {
      id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      region_id: DataTypes.BIGINT,
    },
    {
      timestamps: true,
      underscored: true,
    }
  );

  District.associate = (models) => {
    District.belongsTo(models.Region, {
      foreignKey: "region_id",
      as: "region",
    });
  };

  return District;
};
