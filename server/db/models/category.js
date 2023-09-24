'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate({ Subcategory }) {
      this.hasMany(Subcategory, { foreignKey: 'category_id' });
    }
  }
  Category.init(
    {
      title: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Category',
    }
  );
  return Category;
};
