'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Newsline extends Model {
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: 'admin_id' });
    }
  }
  Newsline.init(
    {
      title: {
        type: DataTypes.TEXT,
      },
      description: {
        type: DataTypes.TEXT,
      },
      img: {
        type: DataTypes.TEXT,
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
      modelName: 'Newsline',
    }
  );
  return Newsline;
};
