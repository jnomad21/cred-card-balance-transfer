require('dotenv').config()
require('./config/database-connect')

const express = require('express');
const path = require('path');
const app = express();
const morgan = require('morgan')
const methodOverride = require('method-override')

const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(methodOverride('_method'))
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter)
app.use('/', usersRouter)




app.listen(3000, function () {
    console.log('Listening on port 3000');
  });