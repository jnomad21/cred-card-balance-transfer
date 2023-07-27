require('dotenv').config()
require('./config/database-connect')

const express = require('express');
const path = require('path');
const app = express();

const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')
const morgan = require('morgan')
const methodOverride = require('method-override')



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(methodOverride('_method'))
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next)=>{
  if(req.method.toLowerCase() === "post"){
      console.log(req.body)
  }
  next();
})

app.use('/accts', indexRouter)
app.use('/users', usersRouter)




app.listen(3000, function () {
    console.log('Listening on port 3000');
  });