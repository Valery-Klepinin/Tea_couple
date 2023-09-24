const { Category } = require('../models');

('use strict');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Category.bulkCreate([
      {
        title: 'Чай',
      },
      {
        title: 'Посуда',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await Category.destroy({ where: {} });
  },
};
