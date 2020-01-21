const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const events = require('./event');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'elearnerssystem'
});

connection.connect();

const port = process.env.PORT || 8081;

const app = express()
  .use(cors())  
  .use(bodyParser.json())
  .use(events(connection));


app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});