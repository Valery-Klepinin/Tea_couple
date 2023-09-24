'use strict';
const { Lesson } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await Lesson.bulkCreate([
      {
        title: 'Как пользоваться типотом',
        description: 'Заваривание в типоте - стеклянном чайнике с клапаном.',
        video: 'https://www.youtube.com/embed/BN6SlkSVP0U?si=m2VuvGBsyUvzyROJ',
        admin_id: 2
      },
      {
        title: 'Как наливать чай',
        description: 'Заваривание в типоте - стеклянном чайнике без клапаном.',
        video: 'https://www.youtube.com/embed/R0OrxkR3p3I?si=QDmvUpaL-vESPNyI',
        admin_id: 2
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
   await Lesson.destroy({ where: {} });
  }
};
