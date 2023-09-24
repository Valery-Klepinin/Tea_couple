'use strict';
const { Newsline } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await Newsline.bulkCreate([
      {
        title: 'Пополнение ассортимента',
        description: 'Друзья! Мы пополнили ассортимент чая, чайных фигурок и посуды. Снова в наличии: Белый чай в бамбуковом листе! Белый чай Бай Хао Инь Чжень (серебряные иглы) 2023г. Габа Лао Бао Ши (Габа Сапфир) 2023г',
        img: 'https://sun9-79.userapi.com/impg/v_t8rB4ieIxtmqOhrKnEGLupZl6FxNwhXR9TGw/CAA_EqsFDYI.jpg?size=864x1080&quality=95&sign=f79ddc0448350780be6503e0c11124d1&type=album',
        admin_id: 2
      },
      {
         title: 'Пополнение ассортимента',
         description: 'Друзья! Мы пополнили ассортимент чая, чайных фигурок и посуды. Снова в наличии: Белый чай в бамбуковом листе! Белый чай Бай Хао Инь Чжень (серебряные иглы) 2023г. Габа Лао Бао Ши (Габа Сапфир) 2023г',
         img: 'https://sun9-24.userapi.com/impg/iNQr5Cs2D7QHnSm2g2Z3YNVkNfw3lM9RsjtWlg/zIZPuZJfEyE.jpg?size=510x510&quality=95&sign=10ff8c345ddef45d2a207ea14b8dd65a&c_uniq_tag=wZ-Dc3dgI-y5jSL5dayHNGDHGSbIyWOcQSNCaQFycz8&type=album',
         admin_id: 2
       },
    ]);
  },

  async down (queryInterface, Sequelize) {
   await Newsline.destroy({ where: {} });
  }
};
