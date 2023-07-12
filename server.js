const express = require('express');
const path = require('path');
const app = express();

const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/', indexRouter)
app.use('/', usersRouter)

app.get('/', function (req, res) {
    res.render('home')
})


app.listen(3000, function () {
    console.log('Listening on port 3000');
  });