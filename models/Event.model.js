module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define(
    "Event",
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
      photo: DataTypes.STRING,
      start_time: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      finish_time: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      info: DataTypes.TEXT,
      event_type_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      human_category_id: DataTypes.BIGINT,
      venue_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      lang_id: DataTypes.SMALLINT,
      release_date: DataTypes.DATE,
    },
    {
      timestamps: true,
      underscored: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );

  Event.associate = (models) => {
    Event.belongsTo(models.EventType, {
      foreignKey: "event_type_id",
      as: "type",
    });

    Event.belongsTo(models.HumanCategory, {
      foreignKey: "human_category_id",
      as: "category",
    });
    Event.belongsTo(models.Venue, {
      foreignKey: "venue_id",
      as: "venue",
    });
    Event.belongsTo(models.Lang, {
      foreignKey: "lang_id",
      as: "language",
    });

    Event.hasMany(models.Ticket, {
      foreignKey: "event_id",
      as: "tickets",
    });
  };

  return Event;
};
