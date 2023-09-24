'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Maps', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
         allowNull: false,
        type: Sequelize.TEXT
      },
      description: {
         allowNull: false,
        type: Sequelize.TEXT
      },
      product_id: {
         allowNull: false,
        type: Sequelize.BIGINT,
        references: {
         model: 'Products',
         key: 'id',
       },
       onDelete: 'CASCADE',
      },
      painting_id: {
         allowNull: false,
        type: Sequelize.BIGINT,
        references: {
         model: 'Paintings',
         key: 'id',
       },
       onDelete: 'CASCADE',
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
    await queryInterface.dropTable('Maps');
  }
};