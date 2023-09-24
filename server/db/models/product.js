'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate({ Favorite, OrderItem, Comment, Map, User, Subcategory }) {
      this.hasMany(Favorite, { foreignKey: 'product_id' });
      this.hasMany(OrderItem, { foreignKey: 'product_id' });
      this.hasMany(Comment, { foreignKey: 'product_id' });
      this.hasMany(Map, { foreignKey: 'product_id' });
      this.belongsTo(User, { foreignKey: 'admin_id' });
      this.belongsTo(Subcategory, { foreignKey: 'subCategory_id' });
    }
  }
  Product.init(
    {
      title: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      description: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      img: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      price: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      admin_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      subCategory_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Subcategories',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      raiting: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      availability: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: 'Product',
    }
  );
  return Product;
};
