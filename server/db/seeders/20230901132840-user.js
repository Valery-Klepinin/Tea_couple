'use strict';
const { User } = require('../models');
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await User.bulkCreate([
      {
        name: 'Антон',
        surname: 'Павлов',
        email: 'anton@mail.ru',
        password: await bcrypt.hash('123456', 10),
        phone: 89823232333,
        isAdmin: false,
        city: 'Санкт-Петербург',
        street: 'Ленина',
        house: '20',
      },
      {
        name: 'Иван',
        surname: 'Иванов',
        email: 'ivan@mail.ru',
        password: await bcrypt.hash('123456', 10),
        phone: 89823232377,
        isAdmin: true,
        city: 'Санкт-Петербург',
        street: 'Восстания',
        house: '42',
      },
      {
        name: 'Николай',
        surname: 'Николаев',
        email: 'kolya@mail.ru',
        password: await bcrypt.hash('123456', 10),
        phone: 89823232311,
        isAdmin: false,
        city: 'Санкт-Петербург',
        street: 'Некрасова',
        house: '15',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await User.destroy({ where: {} });
  },
};
