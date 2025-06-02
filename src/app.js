const express = require('express');

require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });

const morgan = require('morgan');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const { notFound, errorHandler, timeSign } = require('./middlewares');

const app = express();

console.log(`${__dirname}/ui-routes/views`);

app.set('views', `${__dirname}/ui-routes/views`);
app.use(express.static(`${__dirname}/ui-routes/views`));

app.use(express.static(`${__dirname}/ui-routes/public`));
app.set('view engine', 'ejs');

app.use(helmet());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(timeSign);

const employees = require('./routes/employees');
const ui = require('./ui-routes/index');

app.use('/api/employees', employees);
app.use('/ui/employees', ui);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
