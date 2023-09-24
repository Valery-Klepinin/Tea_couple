'use strict';
const { Subcategory } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await Subcategory.bulkCreate([
      {
        title: 'Белый чай',
        category_id: 1
      },
      {
         title: 'Красный чай',
         category_id: 1
       },
       {
         title: 'Тайваньский улун',
         category_id: 1
       },
       {
         title: 'Чашки с крышкой',
         category_id: 2
       },
       {
         title: 'Пиалы',
         category_id: 2
       },
       {
         title: 'Чайники для заваривания чая.',
         category_id: 2
       },
    ]);
  },

  async down (queryInterface, Sequelize) {
   await Subcategory.destroy({ where: {} });
  }
};
