'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ceremony extends Model {
    static associate({ Entry, User }) {
      this.hasMany(Entry, { foreignKey: 'ceremonies_id' });
      this.belongsTo(User, { foreignKey: 'admin_id' });
    }
  }
  Ceremony.init(
    {
      time: {
        type: DataTypes.STRING,
      },
      admin_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
    },
    {
      sequelize,
      modelName: 'Ceremony',
    }
  );
  return Ceremony;
};
