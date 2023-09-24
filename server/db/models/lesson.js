'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lesson extends Model {
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: 'admin_id' });
    }
  }
  Lesson.init(
    {
      title: {
        type: DataTypes.TEXT,
      },
      description: {
        type: DataTypes.TEXT,
      },
      video: {
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
      modelName: 'Lesson',
    }
  );
  return Lesson;
};
