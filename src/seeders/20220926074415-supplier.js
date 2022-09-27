'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('suppliers', [
      {
        name: 'JSW Cement Ltd.',
        address:
          '17/306 (6) NH Road, Manapullikave, Palakkad – 678 013, India.',
        phone: '9847444411',
        email: 'jsw@gmail.com',
      },
      {
        name: 'ACC Cement Ltd.',
        address:
          'Cement House. 121, Maharshi Karve Road Mumbai - 400 020, India.',
        phone: '+91-22-41593 321',
        email: 'acc@gmail.com',
      },
      {
        name: 'Ultratech Cement Ltd.',
        address:
          'Gr. Floor, Ahura Centre, Mahakali Caves Road Andheri (East) Mumbai 400 093, India.',
        phone: '1800 210 3311',
        email: 'ultratech@gmail.com',
      },
      {
        name: 'Bangur Cement Ltd.',
        address:
          'B-21 INDUSTRIAL ESTATE 22 GODOWN JAIPUR Jaipur RJ 302006, India',
        phone: '092165 00270',
        email: 'ultratech@gmail.com',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('suppliers', null, {});
  },
};
