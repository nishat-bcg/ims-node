const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

const Supplier = sequelize.define(
  'suppliers',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
      set(value) {
        this.setDataValue('email', value.toLowerCase());
      },
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = Supplier;
