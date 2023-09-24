'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Entry extends Model {
    static associate({ User, Ceremony }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.belongsTo(Ceremony, { foreignKey: 'ceremonies_id' });
    }
  }
  Entry.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      ceremonies_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Ceremonies',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      personCount: {
        type: DataTypes.INTEGER,
      },
      booking: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: 'Entry',
    }
  );
  return Entry;
};
