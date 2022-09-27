const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection');
const Supplier = require('./supplier.model');
const Category = require('./category.model');

const Product = sequelize.define(
  'products',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

Product.belongsTo(Supplier, {
  as: 'supplier',
  foreignKey: 'supplier_id',
  onDelete: 'CASCADE',
});

Product.belongsTo(Category, {
  as: 'category',
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

// CustomerGroup.hasMany(Customer, { as: 'customers', foreignKey: 'group_id' });

module.exports = Product;
