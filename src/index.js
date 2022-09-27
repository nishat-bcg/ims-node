const env = require('dotenv');
const routeConfig = require('./routes/index.routes');
const connection = require('./db/connection');

env.config({
  path: '.env',
});

const express = require('express');

const app = express();

app.use(express.json());

connection
  .authenticate()
  .then(() => {
    console.log('DB connection is successful 🎉!');
  })
  .catch((error) => {
    console.log('DB connection is failed!', error);
    process.exit(1);
  });

routeConfig(app);

const PORT = process.env.PORT || 4400;

app.listen(PORT, () => {
  console.log(`listening at ${PORT}`);
});
