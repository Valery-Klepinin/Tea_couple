'use strict';
const { Ceremony } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await Ceremony.bulkCreate([
      {
        time: '2023-01-09 13:00:00',
        admin_id: 2
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
   await Ceremony.destroy({ where: {} });
  }
};
