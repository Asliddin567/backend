module.exports = (sequelize, DataTypes) => {
  const EventType = sequelize.define("EventType", {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    parent_event_type_id: DataTypes.STRING,
  });

  EventType.associate = (models) => {
    EventType.hasMany(models.Event, {
      foreignKey: "event_type_id",
      as: "events",
    });
  };

  return EventType;
};
