// server.js
const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const db             = require('./config/db');

const app            = express();

const port = 3000;
const MONGO_URL = 'mongodb://dbuser:fightOn@ds235708.mlab.com:35708/notesdb';

app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(db.url, (err, database) => {
  if (err) return console.log(err)
  const mlabdb=database.db("notesdb")
  require('./app/routes')(app, mlabdb);
  app.listen(port, () => {
    console.log('We are live on ' + port);
  });               
});
