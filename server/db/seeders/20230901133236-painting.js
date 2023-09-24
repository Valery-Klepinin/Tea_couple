'use strict';
const { Painting } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await Painting.bulkCreate([
      {
         img: 'https://sun9-1.userapi.com/impg/K5pWRw3aF-TiEXY7zbLnGU-S1TiLaK3uejSEnA/RaTNzp9rOeQ.jpg?size=510x510&quality=95&sign=6f25a5cf81c3be67be2f812c78f948e5&c_uniq_tag=2T_VzXtOrmhokFM3xffo4K5doyV7eOfraNtDX5K5ND8&type=album'
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
   await Painting.destroy({ where: {} });
  }
};
