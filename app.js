const express = require('express')
const bodyParser = require('body-parser')
const usersRouter = require('./routes/users.route');

const app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/users', usersRouter);

module.exports = app
