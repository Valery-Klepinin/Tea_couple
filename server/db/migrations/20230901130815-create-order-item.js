'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('OrderItems', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      order_id: {
         allowNull: false,
        type: Sequelize.INTEGER,
        references: {
         model: 'Orders',
         key: 'id',
       },
       onDelete: 'CASCADE',
      },
      product_id: {
         allowNull: false,
        type: Sequelize.INTEGER,
        references: {
         model: 'Products',
         key: 'id',
       },
       onDelete: 'CASCADE',
      },
      quantity: {
         allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('OrderItems');
  }
};