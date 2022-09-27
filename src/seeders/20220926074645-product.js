'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products', [
      {
        name: 'PPC Cement by ACC',
        price: 700,
        supplier_id: 2,
        category_id: 1,
      },
      {
        name: 'OPC Cement by JSW',
        price: 1000,
        supplier_id: 1,
        category_id: 2,
      },
      {
        name: 'RHC Cement by Ultratech',
        price: 1500,
        supplier_id: 3,
        category_id: 3,
      },
      {
        name: 'QSC Cement by Bangur',
        price: 1500,
        supplier_id: 4,
        category_id: 4,
      },
      {
        name: 'QSC Cement by Bangur',
        price: 1500,
        supplier_id: 4,
        category_id: 4,
      },
      {
        name: 'OPC Cement by Ultratech',
        price: 750,
        supplier_id: 4,
        category_id: 1,
      },
      {
        name: 'OPC Cement by Ultratech',
        price: 9700,
        supplier_id: 2,
        category_id: 2,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null, {});
  },
};
