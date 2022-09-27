const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

const CustomerGroup = sequelize.define(
  'customerGroups',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = CustomerGroup;
