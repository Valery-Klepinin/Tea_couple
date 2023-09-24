'use strict';
const { Product } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Product.bulkCreate([
      {
        title: 'Шоу Мэй',
        description: 'Доставим 4 сентября, Магнитогорск — примерная стоимость 140 ₽. Бесплатная доставка заказа от 5 000 ₽. Минимальная сумма заказа: 300 ₽',
        img: 'https://sun9-1.userapi.com/impg/K5pWRw3aF-TiEXY7zbLnGU-S1TiLaK3uejSEnA/RaTNzp9rOeQ.jpg?size=510x510&quality=95&sign=6f25a5cf81c3be67be2f812c78f948e5&c_uniq_tag=2T_VzXtOrmhokFM3xffo4K5doyV7eOfraNtDX5K5ND8&type=album',
        price: 225,
        admin_id: 2,
        subCategory_id: 1,
        raiting: 0,
        availability: true,
      },
      {
         title: 'Хун Та',
         description: 'Доставим 4 сентября, Магнитогорск — примерная стоимость 140 ₽. Бесплатная доставка заказа от 5 000 ₽. Минимальная сумма заказа: 300 ₽',
         img: 'https://sun9-12.userapi.com/impg/quX7LvEW5mQpn8t8_oFYOZqYeKwr8Vz95A5UXg/sH__CHvp9hk.jpg?size=510x510&quality=95&sign=f50d3c7a987e3b573a075028842ce9ce&c_uniq_tag=QK6RFAIydif_PHphVI1uFjkggmyW1mMsQRCeiqT9_jw&type=album',
         price: 600,
         admin_id: 2,
         subCategory_id: 2,
         raiting: 0,
         availability: true,
       },
       {
         title: 'Фермерская габа',
         description: 'Доставим 4 сентября, Магнитогорск — примерная стоимость 140 ₽. Бесплатная доставка заказа от 5 000 ₽. Минимальная сумма заказа: 300 ₽',
         img: 'https://sun9-10.userapi.com/impg/59bS2PmVJLnxPM9yputH_Rxdo72ZGsnFCv-NLQ/w9UjwGSOFXs.jpg?size=510x510&quality=95&sign=6a59819e016efcc5c322fe016b4bd7e4&c_uniq_tag=LNT-MmGbrb2d5nGz2N66QSOdd0F-kvekAJpHT5BAqfI&type=album',
         price: 450,
         admin_id: 2,
         subCategory_id: 3,
         raiting: 0,
         availability: true,
       },
       {
         title: 'Гайвань "Бамбук" 160мл.',
         description: 'Доставим 4 сентября, Магнитогорск — примерная стоимость 140 ₽. Бесплатная доставка заказа от 5 000 ₽. Минимальная сумма заказа: 300 ₽',
         img: 'https://sun9-18.userapi.com/IXv4ecFkyX1ZJxeftBXAMzq46J0aavvCCEQ9OQ/5-3ROy0H1NA.jpg',
         price: 1500,
         admin_id: 2,
         subCategory_id: 4,
         raiting: 0,
         availability: true,
       },
       {
         title: 'Пиала "Кинцуги зеленая" 50мл.',
         description: 'Доставим 4 сентября, Магнитогорск — примерная стоимость 140 ₽. Бесплатная доставка заказа от 5 000 ₽. Минимальная сумма заказа: 300 ₽',
         img: 'https://sun9-22.userapi.com/6ur8qJFj89ErVXl-Nh9khZcMJa_9Sqey__bvXg/2kUtge0Yt-Q.jpg',
         price: 550,
         admin_id: 2,
         subCategory_id: 5,
         raiting: 0,
         availability: true,
       },
       {
         title: 'Чайник "Бань Ши Си" 100мл.',
         description: 'Доставим 4 сентября, Магнитогорск — примерная стоимость 140 ₽. Бесплатная доставка заказа от 5 000 ₽. Минимальная сумма заказа: 300 ₽',
         img: 'https://sun9-28.userapi.com/gqFwL7KEzDFZd0dbQw9nzKSsdYFi5LNMFnj9SA/yqPuMc64rHg.jpg',
         price: 10000,
         admin_id: 2,
         subCategory_id: 6,
         raiting: 0,
         availability: true,
       },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await Product.destroy({ where: {} });
  },
};
