'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('customerGroups', [
      {
        name: 'Government Employee',
      },
      {
        name: 'House Wife',
      },
      {
        name: 'Army Personnel',
      },
      {
        name: 'Private Job Employee',
      },
      {
        name: 'Business Person',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('customerGroups', null, {});
  },
};
