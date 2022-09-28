# Inventory Management System

## About

Inventory management is how you track and control your business’ inventory as it is bought, manufactured, stored, and used. It governs the entire flow of goods — from purchasing right through to sale — ensuring that you always have the right quantities of the right item in the right location at the right time.

## Technology Used

- Nodejs
- Express
- Prettier (Code formatting)
- Sequelize (Database management ORM)
- SQLite (Database management ORM)

## Exercise Point Covered

Performed CRUD operation on the all the following tables:

- customer
- product
- product_order

## To generate migrations

`npx sequelize-cli migration:generate --name <name>`

## To run migrations

`npm run migrations`

## To delete migrations

`npm run migrations:undo`

## To start the application

`npm run start`

Runs the app in the development mode.

## API Structure

1. Customer

- GET - [http://localhost:4000/api/v1/customers](http://localhost:4000/api/v1/customers)
- POST - [http://localhost:4000/api/v1/customers](http://localhost:4000/api/v1/customers)
- PUT - [http://localhost:4000/api/v1/customers/<:id>](http://localhost:4000/api/v<:id>/customers/1)
- DELETE - [http://localhost:4000/api/v1/customers/<:id>](http://localhost:4000/api/v1/customers/1)

2. Product

- GET - [http://localhost:4000/api/v1/products](http://localhost:4000/api/v1/products)
- POST - [http://localhost:4000/api/v1/products](http://localhost:4000/api/v1/products)
- PUT - [http://localhost:4000/api/v1/products/<:id>](http://localhost:4000/api/v<:id>/products/1)
- DELETE - [http://localhost:4000/api/v1/products/<:id>](http://localhost:4000/api/v1/products/1)

3. Product Order

- GET - [http://localhost:4000/api/v1/productOrders](http://localhost:4000/api/v1/productOrders)
- POST - [http://localhost:4000/api/v1/productOrders](http://localhost:4000/api/v1/productOrders)
- PUT - [http://localhost:4000/api/v1/productOrders/<:id>](http://localhost:4000/api/v<:id>/productOrders/1)
- DELETE - [http://localhost:4000/api/v1/productOrders/<:id>](http://localhost:4000/api/v1/productOrders/1)
