'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categories', [
      {
        name: 'Portland Pozzolana Cement (PPC).',
        description:
          'It is prepared by grinding pozzolanic clinker with Portland cement.',
      },
      {
        name: 'Ordinary Portland Cement (OPC).',
        description:
          'It is the most widely used type of cement, which is suitable for all general concrete construction.',
      },
      {
        name: 'Rapid Hardening Cement (RHC).',
        description:
          'Rapid hardening cement attains high strength in the early days; it is used in concrete where formworks are removed at an early stage and are similar to ordinary portland cement (OPC).',
      },
      {
        name: 'Quick Setting Cement (QSC).',
        description:
          'The difference between the quick setting cement and rapid hardening cement is that quick-setting cement sets earlier.',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categories', null, {});
  },
};
