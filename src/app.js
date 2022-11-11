const express = require('express');
const productRouter = require('./routers/product.router');

const app = express();

app.use(express.json());

app.use('/products', productRouter);

module.exports = app;