require('newrelic');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const router = require('./router');

const app = express();

const port = 4000;

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../client/dist/')));

app.use('/sidebar', bodyParser.json());
app.use('/sidebar', bodyParser.urlencoded({extended:true}));
app.use('/sidebar', router);

app.listen(port, () => console.log(`connected to port ${port}`));

module.exports = app;