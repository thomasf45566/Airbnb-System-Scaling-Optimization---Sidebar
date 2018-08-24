require('newrelic');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const router = require('./router');

const app = express();

const port = 4000;

app.use(morgan('dev'))

app.use('/sidebar', bodyParser.json());
app.use('/sidebar', bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, '../client/dist/')));

// const serverSideRender = require('./serverSideRendering');

// app.use('/', serverSideRender);

app.use('/sidebar', router);

app.listen(port, () => console.log(`connected to port ${port}`));

module.exports = app;