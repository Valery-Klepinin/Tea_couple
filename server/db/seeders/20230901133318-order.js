'use strict';
const { Order } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await Order.bulkCreate([
      {
         user_id: 1,
         purchcase: false,
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
   await Order.destroy({ where: {} });
  }
};
