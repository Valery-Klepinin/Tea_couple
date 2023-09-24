'use strict';
const { OrderItem } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await OrderItem.bulkCreate([
      {
         order_id: 1,
         product_id: 1,
         quantity: 2,
      },
      {
         order_id: 1,
         product_id: 2,
         quantity: 3,
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
   await OrderItem.destroy({ where: {} });
  }
};
