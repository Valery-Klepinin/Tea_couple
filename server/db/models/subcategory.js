'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subcategory extends Model {
    static associate({Product, Category}) {
      this.hasMany(Product, { foreignKey: 'subCategory_id' });
      this.belongsTo(Category, { foreignKey: 'category_id' });
    }
  }
  Subcategory.init(
    {
      title: {
        type: DataTypes.TEXT,
      },
      category_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Categories',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
    },
    {
      sequelize,
      modelName: 'Subcategory',
    }
  );
  return Subcategory;
};
