module.exports = (sequelize, DataTypes) => {
  const HumanCategory = sequelize.define(
    "HumanCategory",
    {
      id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      start_age: DataTypes.SMALLINT,
      finish_age: DataTypes.SMALLINT,
      gender: DataTypes.ENUM("male", "female", "both"),
    },
    {
      timestamps: true,
      underscored: true,
    }
  );

  return HumanCategory;
};
