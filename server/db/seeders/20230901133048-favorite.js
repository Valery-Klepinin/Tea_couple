'use strict';
const { Favorite } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Favorite.bulkCreate([
      {
         product_id: 1,
         user_id: 1,
      },
      {
         product_id: 2,
         user_id: 1,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await Favorite.destroy({ where: {} });
  },
};
