const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const passport = require('passport');
const config = require('./db');
const usersRoutes = require('./routes/user');
const todoRoutes = require('./routes/todo');
const core = require('cors');

const PORT = 4000;

mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => { console.log("MongoDB database connection established successfully")},
  err => { console.log('Can not connect to the database. ' + err)});

app.use(core());
app.use(passport.initialize());
require('./passport')(passport);

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/todos', todoRoutes);
app.use('/api/users', usersRoutes);
app.get('/', function(req, res){
  res.send('hello');
});

app.listen(PORT, function () {
  console.log("Server is running on Port: " + PORT);
});