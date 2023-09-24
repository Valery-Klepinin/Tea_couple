'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Map extends Model {
    static associate({ Product, Painting }) {
      this.belongsTo(Product, { foreignKey: 'product_id' });
      this.belongsTo(Painting, { foreignKey: 'painting_id' });
    }
  }
  Map.init(
    {
      title: {
        type: DataTypes.TEXT,
      },
      description: {
        type: DataTypes.TEXT,
      },
      product_id: {
        type: DataTypes.BIGINT,
        references: {
          model: 'Products',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      painting_id: {
        type: DataTypes.BIGINT,
        references: {
          model: 'Paintings',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
    },
    {
      sequelize,
      modelName: 'Map',
    }
  );
  return Map;
};
