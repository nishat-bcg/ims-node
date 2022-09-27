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
