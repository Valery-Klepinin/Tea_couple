'use strict';
const { Map } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await Map.bulkCreate([
      {
         title: 'Характеристики качественного Шэн Пуэра',
         description: 'Основное сырье: блестящие молодые листья, мясистые и упругие. Лучший Шэн тот, который собрали ранней весной, затем идёт весенний и осенний чай.',
         product_id: 1,
         painting_id: 1,
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
   await Map.destroy({ where: {} });
  }
};
