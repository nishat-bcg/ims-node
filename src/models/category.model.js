const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

const Category = sequelize.define(
  'categories',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = Category;
