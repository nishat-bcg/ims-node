const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection');
const CustomerGroup = require('./customerGroup.model');

const Customer = sequelize.define(
  'customers',
  {
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
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

Customer.belongsTo(CustomerGroup, {
  as: 'group',
  foreignKey: 'group_id',
  onDelete: 'CASCADE',
});

CustomerGroup.hasMany(Customer, { as: 'customers', foreignKey: 'group_id' });

module.exports = Customer;
