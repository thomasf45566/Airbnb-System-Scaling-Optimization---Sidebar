const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const router = require('./router');
const connection = require('../database/index');

const app = express();

const port = 3000;

app.use(morgan('dev'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, '../client/dist/')));

app.use('/sidebar', router);

app.listen(port, () => console.log(`connected to port ${port}`));

module.exports = app;