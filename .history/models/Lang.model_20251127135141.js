// module.exports = (sequelize, DataTypes) => {
//   const Lang = sequelize.define(
//     "Lang",
//     {
//       id: {
//         type: DataTypes.SMALLINT,
//         autoIncrement: true,
//         primaryKey: true,
//       },
//       name: DataTypes.STRING,
//     },
//     {
//       timestamps: true,
//       underscored: true,
//     }
//   );

//   return Lang;
// };


module.exports = (sequelize, DataTypes) => {
  const Lang = sequelize.define(
    "Lang",
    {
      id: {
        type: DataTypes.SMALLINT,
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

  Lang.associate = (models) => {
    Lang.hasMany(models.Event, {
      foreignKey: "lang_id",
      as: "events",
    });
  };

  return Lang;
};
