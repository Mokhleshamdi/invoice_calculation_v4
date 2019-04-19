'use strict';
require('dotenv').config();

const fs = require('fs');
const join = require('path').join;
const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
const generatePdf = require('./config/pdf/generator');
const docDefinition = require('./config/pdf/pdf-template');

const models = join(__dirname, 'app/models');
const port = process.env.PORT || 5010;

const app = express();
const connection = connect();

module.exports = {
  app,
  connection
};

app.get('/generate-pdf', (req, res) => {
  generatePdf(docDefinition, response => res.send(response));
});

fs.readdirSync(models)
  .filter(file => ~file.indexOf('.js'))
  .forEach(file => require(join(models, file)));


connection
  .on('error', console.log)
  .on('disconnected', connect)
  .once('open', listen);

function listen() {
  if (app.get('env') === 'test') return;
  app.listen(port);
  console.log('Express app started on port ' + port);
}

function connect() {
  var options = { keepAlive: 1, useNewUrlParser: true };
  mongoose.connect(config.db, options);
  return mongoose.connection;
}
