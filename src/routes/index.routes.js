const category = require('./category.routes');
const customerGroup = require('./customerGroup.routes');
const product = require('./product.routes');
const productOrder = require('./productOrder.routes');
const supplier = require('./supplier.routes');
const customer = require('./customer.routes');

function routeConfig(app) {
  app.use('/api/v1', category);
  app.use('/api/v1', customerGroup);
  app.use('/api/v1', product);
  app.use('/api/v1', productOrder);
  app.use('/api/v1', supplier);
  app.use('/api/v1', customer);

  app.use('*', (req, res, next) => {
    res.send(`${req.originalUrl} not found 😐`);
  });
}

module.exports = routeConfig;
