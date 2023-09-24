'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Favorite, Order, Comment, Entry, Product, Ceremony, Newsline, Lesson }) {
      this.hasMany(Favorite, { foreignKey: 'user_id' });
      this.hasMany(Order, { foreignKey: 'user_id' });
      this.hasMany(Comment, { foreignKey: 'user_id' });
      this.hasMany(Entry, { foreignKey: 'user_id' });
      this.hasMany(Product, { foreignKey: 'admin_id' });
      this.hasMany(Ceremony, { foreignKey: 'admin_id' });
      this.hasMany(Newsline, { foreignKey: 'admin_id' });
      this.hasMany(Lesson, { foreignKey: 'admin_id' });
    }
  }
  User.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      surname: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      email: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      password: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      phone: {
        allowNull: false,
        type: DataTypes.BIGINT,
      },
      isAdmin: {
        defaultValue: false,
        type: DataTypes.BOOLEAN,
      },
      city: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      street: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      house: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
