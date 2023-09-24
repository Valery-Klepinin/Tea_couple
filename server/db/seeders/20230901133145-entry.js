'use strict';
const { Entry } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await Entry.bulkCreate([
      {
         user_id: 1,
         ceremonies_id: 1,
         personCount: 5,
         booking: true,
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
   await Entry.destroy({ where: {} });
  }
};
