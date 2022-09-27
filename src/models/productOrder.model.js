const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

const Product = require('./product.model');
const Customer = require('./customer.model');

const ProductOrder = sequelize.define(
  'productOrders',
  {
    order_discount: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    total_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    order_date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    freezeTableName: true,
  }
);

ProductOrder.belongsTo(Product, {
  as: 'product',
  foreignKey: 'product_id',
  onDelete: 'CASCADE',
});

ProductOrder.belongsTo(Customer, {
  as: 'customer',
  foreignKey: 'customer_id',
  onDelete: 'CASCADE',
});

module.exports = ProductOrder;
