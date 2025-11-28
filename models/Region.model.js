module.exports = (sequelize, DataTypes) => {
  const Region = sequelize.define(
    "Region",
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

  return Region;
};
