'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Painting extends Model {
    static associate({ Map }) {
      this.hasMany(Map, { foreignKey: 'painting_id' });
    }
  }
  Painting.init(
    {
      img: {
         type: DataTypes.TEXT
       },
    },
    {
      sequelize,
      modelName: 'Painting',
    }
  );
  return Painting;
};
