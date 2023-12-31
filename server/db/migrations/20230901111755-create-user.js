'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
         allowNull: false,
        type: Sequelize.TEXT
      },
      surname: {
         allowNull: false,
        type: Sequelize.TEXT
      },
      email: {
         allowNull: false,
        type: Sequelize.TEXT
      },
      password: {
         allowNull: false,
        type: Sequelize.TEXT
      },
      phone: {
         allowNull: false,
        type: Sequelize.BIGINT
      },
      isAdmin: {
         defaultValue: false,
        type: Sequelize.BOOLEAN
      },
      city: {
         allowNull: false,
        type: Sequelize.TEXT
      },
      street: {
         allowNull: false,
        type: Sequelize.TEXT
      },
      house: {
         allowNull: false,
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('Users');
  }
};