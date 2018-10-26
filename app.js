const express = require('express');
const app = express();

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');
const vegetableRoutes = require('./api/routes/vegetables');
const fruitRoutes = require('./api/routes/fruits');

app.use('/products', productRoutes);
app.use('/orders', orderRoutes);
app.use('/vegetables', vegetableRoutes);
app.use('/fruits', fruitRoutes);

module.exports = app;