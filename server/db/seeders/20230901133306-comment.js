'use strict';
const { Comment } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await Comment.bulkCreate([
      {
         user_id: 1,
         product_id: 1,
         description: 'Вкусный чай',
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
   await Comment.destroy({ where: {} });
  }
};
